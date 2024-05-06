import {createOpenAI} from '@ai-sdk/openai'
import { OpenAIStream, StreamingTextResponse, streamText } from 'ai';
import { LoaderFunctionArgs } from '@remix-run/node';


const groq = createOpenAI({
  apiKey: process.env.GROQ_API_KEY ?? '',
  baseURL: 'https://api.groq.com/openai/v1',
});

export const action = async ({ request }: LoaderFunctionArgs) => {
  const { messages } = await request.json();

  const response = await streamText({
    model: groq.chat('llama3-70b-8192'),
    messages,
  });

  return response.toAIStreamResponse();
};
