import Link from "next/link";
import { IoMdHeart } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-y-2 text-center p-4">
      <div className="text-xs">
        This open-source tool{" "}
        <Link
          href="https://github.com/rbkayz/supexplain"
          target="_blank"
          className="underline"
        >
          (Github)
        </Link>{" "}
        was built for the Supabase Hackathon, and is not affiliated with or
        endorsed by Supabase
      </div>
      <div className="text-xs">
        Many credits to the Dalibo team for building and maintaining an
        excellent{" "}
        <Link
          href="https://github.com/dalibo/postgres_explain_visualizer"
          className="underline"
          target="_blank"
        >
          PEV library
        </Link>
      </div>
      <div className="text-xs flex items-center gap-x-1">
        Made with <IoMdHeart className="text-green-700" /> by{" "}
        <Link href="https://twitter.com/rbkayz" target="_blank">
          @rbkayz, 
        </Link>
        CTO
        <Link
          href="https://periskope.app"
          target="_blank"
          className="underline"
        >
          Periskope
        </Link>
      </div>
    </footer>
  );
};
