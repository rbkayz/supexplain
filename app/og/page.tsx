import { GiElephantHead } from "react-icons/gi";

export default function Page() {
  return (
    <div className="w-full h-full flex-col gap-y-4 flex items-center justify-center">
      <div className="h-[630px] flex-col gap-y-6 w-[1200px] bg-gray-800 flex items-center justify-center">
        <p className="text-6xl font-black text-green-500">SupExplain</p>
        <p className="text-2xl font-medium text-gray-100">An AI Postgres Query Plan Explainer</p>
      </div>
      <GiElephantHead className="text-9xl text-green-500" />
    </div>
  );
};
