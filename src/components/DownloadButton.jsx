import DownloadIcon from "./icons/DownloadIcon.jsx";

const DownloadButton = (props) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] max-w-max focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
      <span className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-full bg-valentines-day-500 px-4 py-2 text-sm font-bold text-[#242422] backdrop-blur-3xl lg:text-base lg:px-6 lg:py-3">
        <DownloadIcon className={"size-6"} />
        {props.text}
      </span>
    </button>
  );
};

export default DownloadButton;
