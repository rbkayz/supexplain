"use client";
import { useRef } from "react";
import { PEV } from "../_components/pev";
import { Analysis } from "../_components/analysis";

export default function AnalyzePage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="flex w-full h-full items-center justify-between overflow-hidden">
      <Analysis />
      <PEV iframeRef={iframeRef} />
    </div>
  );
}
