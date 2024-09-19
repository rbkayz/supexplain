export const PEV: React.FC<{
  iframeRef: React.RefObject<HTMLIFrameElement>;
}> = ({ iframeRef }) => {
  return (
    <iframe
      ref={iframeRef}
      className="w-2/3 h-full border rounded"
      src="./pev.html"
    ></iframe>
  );
};
