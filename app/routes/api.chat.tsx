import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: process.env.BASE_URL,
});

export const action = async ({ request }: { request: Request }) => {
  const { messages } = await request.json();

  const response = await openai.chat.completions.create({
    model: 'llama3-8b-8192',
    stream: true,
    messages,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
};
