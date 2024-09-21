import { Analysis } from "../_components/analysis";
import { PEV } from "../_components/pev";

export const maxDuration = 60;

export default function AnalyzePage() {
  return (
    <div className="flex w-full h-full flex-col lg:flex-row items-center justify-between overflow-hidden">
      <Analysis />
      <PEV />
    </div>
  );
}
