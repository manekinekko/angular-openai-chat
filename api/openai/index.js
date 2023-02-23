require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const conversation_history = [
  "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.",
  "",
  "Human: Hello, who are you?",
  "AI: I am an AI created by OpenAI. How can I help you today?",
];

module.exports = async function (context, req) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  let { prompt } = req.body;
  
  if (!prompt) {
    prompt = conversation_history.join("");
  } else {
    prompt = conversation_history.join("\n") + "\nHuman: " + prompt + "\nAI:";
  }

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt,
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6,
    stop: [" Human:", " AI:"],
  });

  context.res = {
    body: completion.data.choices[0],
  };
};
