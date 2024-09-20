"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="grid h-screen place-content-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">400</h1>

        <p className="text-2xl font-bold tracking-tight lg:text-4xl">
          Something broke!
        </p>

        <p className="mt-4">There was an error in loading this page.</p>

        <div className="mt-4 flex h-20 w-full items-center justify-center overflow-ellipsis whitespace-normal rounded-md bg-gray-200 text-gray-700 shadow-inner">
          <code>{error.message}</code>
        </div>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-block rounded bg-green-700 px-4 py-2 font-medium text-white hover:bg-green-700/80 focus:outline-none"
        >
          Refresh
        </button>
      </div>
    </div>
  );
}
