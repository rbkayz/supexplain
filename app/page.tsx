"use client";
import { Switch } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Bs1SquareFill, Bs2SquareFill, Bs3SquareFill } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { SAMPLE_QUERY, SAMPLE_QUERY_PLAN } from "./_components/constants";

export default function Home() {
  const planRef = useRef<HTMLTextAreaElement>(null);
  const queryRef = useRef<HTMLTextAreaElement>(null);
  const [enabled, setEnabled] = useState(true);
  const router = useRouter();

  // Load preferences from local storage
  useEffect(() => {
    const preferences = JSON.parse(
      window.localStorage.getItem("supexplain_preferences") ?? "{}"
    );
    if (preferences) {
      setEnabled(Boolean(preferences.ai ?? true));
    }

    const plan = window.localStorage.getItem("plan");
    const query = window.localStorage.getItem("query");

    if (plan && planRef.current) {
      planRef.current.value = plan;
    }

    if (query && queryRef.current) {
      queryRef.current.value = query;
    }
  }, []);

  const handleClick = () => {
    if (!planRef.current?.value) {
      toast.error("Please fill in the plan");
      return;
    }

    if (!queryRef.current?.value) {
      toast.error("Please fill in the query");
      return;
    }

    window.localStorage.setItem(
      "supexplain_preferences",
      JSON.stringify({ ai: enabled })
    );

    window.localStorage.setItem("plan", planRef.current?.value ?? "");

    window.localStorage.setItem("query", queryRef.current?.value ?? "");

    router.push("/analyze");
  };

  return (
    <div className="flex w-full h-full max-w-screen-xl mx-auto p-8 items-center gap-x-8">
      <div className="flex flex-col gap-y-8 w-full h-full">
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-x-3 text-lg font-semibold">
            <Bs1SquareFill />
            <span>About SupExplain</span>
          </div>
          <div>
            SupExplain is an AI Postgres Explain Visualizer. It uses the PEV
            library to visualize the query plan of your queries
            <br />
            <br />
            The tool also uses GPT-4o to analyze your query plan and suggest recommendations
            <br />
            <br />
            Use this tool to identify inefficiencies in your queries and improve
            performance
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-x-3 text-lg font-semibold">
            <Bs2SquareFill />
            <span>Run your query with EXPLAIN ANALYZE</span>
          </div>
          <div className="flex flex-col gap-y-2">
            Open the SQL editor of your supabase project
            <br />
            <br />
            Append the following statement to the start of the query and run it
            <div className="font-mono text-green-700 font-semibold flex items-center gap-x-4 px-4 py-2 bg-gray-50 w-fit rounded-md shadow-inner">
              {`EXPLAIN (ANALYZE, COSTS, VERBOSE, BUFFERS, FORMAT JSON)`}
              <MdContentCopy
                className="cursor-pointer"
                onClick={() => {
                  toast.promise(
                    navigator.clipboard.writeText(
                      `EXPLAIN (ANALYZE, COSTS, VERBOSE, BUFFERS, FORMAT JSON)`
                    ),
                    {
                      loading: "Copying to clipboard",
                      success: "Copied to clipboard",
                      error: "Failed to copy to clipboard",
                    }
                  );
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-x-3 text-lg font-semibold">
            <Bs3SquareFill />
            <span>Paste the output on the RHS</span>
          </div>
          <div className="">
            Paste the query plan in the top box, and the query in the bottom
            box. <br />
            Click on <span className="underline">Analyze Query Plan</span>
          </div>
          <div className="italic text-gray-500">
            This tool does not store your query or send it to any remote
            servers. All visualizations are rendered locally
          </div>
          <div className="flex items-center gap-x-2">
            <Switch
              checked={enabled}
              onChange={(checked) => {
                setEnabled(checked);
                window.localStorage.setItem(
                  "supexplain_preferences",
                  JSON.stringify({ ai: checked })
                );
              }}
              className={`${
                enabled ? "bg-green-700" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  enabled ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>
            Analyze query with AI (this will send the plan to OpenAI)
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-8 w-full h-full">
        <textarea
          ref={planRef}
          className="w-full h-full rounded-md focus:outline-green-700 shadow-inner border bg-gray-50/50 font-mono p-4 text-sm"
          placeholder={`PASTE YOUR QUERY PLAN HERE (example below):\n\n${JSON.stringify(SAMPLE_QUERY_PLAN)}`}
        />
        <textarea
          ref={queryRef}
          className="w-full h-full rounded-md  focus:outline-green-700 shadow-inner border bg-gray-50/50 font-mono p-4 text-sm"
          placeholder={`PASTE YOUR QUERY HERE (example below):\n\n${SAMPLE_QUERY}`}
        />
        <div className="flex gap-x-4 items-center">
          <button
            className="bg-green-700 text-white px-8 hover:opacity-90 py-2 rounded-md w-fit"
            onClick={handleClick}
          >
            Analyze Query Plan
          </button>
          <button
            className="bg-gray-200 text-gray-500 px-8 hover:opacity-90 py-2 rounded-md w-fit"
            onClick={() => {
              if (!planRef.current || !queryRef.current) {
                return;
              }
              planRef.current.value = JSON.stringify(SAMPLE_QUERY_PLAN);
              queryRef.current.value = SAMPLE_QUERY;
              // handleClick();
            }}
          >
            Run Example
          </button>
        </div>
      </div>
    </div>
  );
}
