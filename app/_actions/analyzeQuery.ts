"use server";
import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { createStreamableValue } from "ai/rsc";

export const analyzeQuery = async ({
  plan,
  query,
}: {
  plan: string;
  query: string;
}) => {
  const stream = createStreamableValue<string>("");

  (async () => {
    const { textStream } = await streamText({
      model: openai("gpt-4o-mini"),
      messages: [
        {
          role: "system",
          content:
            "You are a helpful assistant that analyzes PostgreSQL query plans and provides insights on how to optimize them. Provide recommendations to the user on how to improve. Only provide the output in markdown format. Add 2 new lines after each paragraph. Explain to the user on what parts of the query plan are inefficient.Suggest your recommendations to improve performance in a numbered list. Prefer specific recommendations like adding indexes, optimizing joins, CTEs, etc. If you suggest adding indexes, provide the exact columns and types that should be indexed. Avoid generic recommendations",
        },
        {
          role: "user",
          content: `Here is the query plan: ${plan} and the query: ${query}`,
        },
      ],
    });

    for await (const delta of textStream) {
      stream.update(delta);
    }

    stream.done();
  })();

  return stream.value;
};
