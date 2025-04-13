import { createGoogleGenerativeAI } from '@ai-sdk/google';
import type { GoogleGenerativeAIProvider } from '@ai-sdk/google';
import { streamText } from 'ai';
import type { LanguageModelV1 } from 'ai';

const googleGenAI: GoogleGenerativeAIProvider = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

const gemini2: LanguageModelV1 = googleGenAI('gemini-2.0-flash');

// Max Vercel function runtime, equals max duration for streaming responses over HTTP
// 60s is max limit for Hobby tier (10s is default)
export const maxDuration: number = 60;

export const POST = async (req: Request): Promise<Response> => {
  const { messages } = await req.json();

  const result = streamText({
    model: gemini2,
    messages,
  });

  return result.toDataStreamResponse();
};
