require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const conversation_history = [
  "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.",
  "The assistant responds to the user's input with a complete sentence in a natural way.",
  "",
  "Human: Hello, who are you?",
  "AI: I am an AI created by OpenAI. How can I help you today?",
];

module.exports = async function (context, req) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  let { prompt, user } = req.body;
  
  if (!prompt) {
    prompt = conversation_history.join("");
  }

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6,
    stop: ["Human: ", `${user}: `, "AI: "],
  });

  const response = completion.data.choices[0];

  // add the user's input to the conversation history
  conversation_history.push(`${user}: ${prompt}`);

  // add the assistant's response to the conversation history
  conversation_history.push(`AI: ${response.text}`);

  context.res = {
    body: response,
  };

  console.log({conversation_history});
};
