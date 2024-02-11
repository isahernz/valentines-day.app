import DownloadIcon from "./icons/DownloadIcon.jsx";

const DownloadButton = (props) => {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] w-full sm:max-w-max focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
      <span className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#d90429] px-8 py-3 text-sm font-bold text-valentines-day-50 backdrop-blur-3xl lg:text-base lg:px-6 lg:py-3">
        <DownloadIcon className={"size-6"} />
        {props.text}
      </span>
    </button>
  );
};

export default DownloadButton;
