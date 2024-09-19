import { useRouter } from "next/navigation";
import { FaAngleLeft } from "react-icons/fa";
import { analyzeQuery } from "../_actions/analyzeQuery";
import { useEffect, useState } from "react";
import { readStreamableValue } from "ai/rsc";
import ReactMarkdown from "react-markdown";

export const Analysis = () => {
  const router = useRouter();
  const [output, setOutput] = useState<string>("");
  const [useAi, setUseAi] = useState<boolean | null>(null);

  useEffect(() => {
    const plan = window.localStorage.getItem("plan");
    const query = window.localStorage.getItem("query");
    const preferences = JSON.parse(
      window.localStorage.getItem("supexplain_preferences") ?? "{}"
    );

    const ai = preferences.ai ?? false;

    setUseAi(ai);
    if (plan && query && ai) {
      let isMounted = true;

      analyzeQuery({ plan, query }).then(async (output) => {
        for await (const content of readStreamableValue(output)) {
          if (isMounted) {
            setOutput((prev) => (prev ?? "") + (content ?? ""));
            console.log(content);
          }
        }
      });

      return () => {
        isMounted = false;
      };
    }
  }, []);

  return (
    <div className="flex flex-col h-full w-1/3 items-start justify-between pl-4 gap-y-4">
      <button
        className="flex items-center gap-x-2 text-sm border rounded px-2 py-1 shadow-sm hover:bg-gray-100"
        onClick={() => {
          router.push("/");
        }}
      >
        <FaAngleLeft /> Back
      </button>
      <div className="flex flex-col h-full w-full items-center justify-start overflow-y-scroll">
        {useAi == null ? null : useAi ? (
          <div className="prose pr-2">
            <ReactMarkdown
              components={{
                hr: () => null,
              }}
            >
              {output}
            </ReactMarkdown>
          </div>
        ) : (
          <div className="text-sm h-full flex w-full text-center items-center justify-center text-gray-500">
            AI analysis is disabled
          </div>
        )}
      </div>
    </div>
  );
};
