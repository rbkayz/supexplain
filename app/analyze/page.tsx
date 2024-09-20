"use client";
import { useRef } from "react";
import { Analysis } from "../_components/analysis";
import { PEV } from "../_components/pev";

export default function AnalyzePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="flex w-full h-full flex-col lg:flex-row items-center justify-between overflow-hidden">
      <Analysis />
      <PEV iframeRef={iframeRef} />
    </div>
  );
}
