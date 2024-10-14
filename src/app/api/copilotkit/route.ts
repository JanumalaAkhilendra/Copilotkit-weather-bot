import {
    CopilotRuntime,
    GroqAdapter,
    copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
  import { NextRequest } from 'next/server';
  import Groq from "groq-sdk";

  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY }) as any;
//   const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const serviceAdapter = new GroqAdapter({ groq, model: "llama3-groq-8b-8192-tool-use-preview" });
//   const serviceAdapter = new OpenAIAdapter({ openai , model: "gpt-3.5-turbo"});

  const runtime = new CopilotRuntime();
   
  export const POST = async (req: NextRequest) => {
    const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
      runtime,
      serviceAdapter,
      endpoint: '/api/copilotkit',
    });
   
    return handleRequest(req);
  };