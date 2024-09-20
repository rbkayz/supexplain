export const PEV: React.FC<{
  iframeRef: React.RefObject<HTMLIFrameElement>;
}> = ({ iframeRef }) => {
  return (
    <iframe
      ref={iframeRef}
      className="h-1/2 w-full lg:w-2/3 lg:h-full border rounded"
      src="./pev.html"
    ></iframe>
  );
};
