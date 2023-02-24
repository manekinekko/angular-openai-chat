# OpenAI Chat

<p align="center">
  <img src="https://user-images.githubusercontent.com/1699357/221192599-7f623130-042b-4bf3-8d91-8a933a702c39.png"/>
</p>

## Description

This project is a simple chatbot that uses OpenAI's GPT-3 API to generate responses to user input. It is built using Angular and Material Design.

## Installation

Run `npm install` to install the project dependencies.

## Configuration

1. Create an account on [OpenAI](https://openai.com/).
2. Create an API key on [OpenAI's API Keys page](https://beta.openai.com/account/api-keys).
3. Create an `.env` file under `./api` and add the following environment variables:

```bash
OPENAI_API_KEY=<YOUR OPENAI API KEY>
```

## Development server

Run `npx swa start` for a dev server. Navigate to `http://localhost:4280/`. The application will automatically reload if you change any of the source files.

## Build

Run `npx swa build` to build the project. The build artifacts will be stored in the `dist/openai-chat` directory for the Angular application and `./api` directory for the API.

## Deploy

Run `npx swa deploy` to deploy the application to Azure Static Web Apps. You will be prompted to login to Azure and select a subscription and resource group. You will also be prompted to create a new Static Web App or select an existing one.

Note: You will need to add the `OPENAI_API_KEY` environment variable to your Static Web App's configuration. Read more about [environment variables](https://learn.microsoft.com/azure/static-web-apps/application-settings).
