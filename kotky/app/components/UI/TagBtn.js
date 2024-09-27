import CloseIcon from "@mui/icons-material/Close";

export default function TagBtn({ text }) {
  return (
    <div>
      <p className="hover:-translate-y-2 cursor-pointer border text-[#3BB77E] leading-7 border-[#ececec] bg-white rounded-[30px] shadow-custom py-1 pr-4 pl-[20px] font-bold text-[15px] transition duration-300">
        <CloseIcon className="scale-75" />
        <span>{text}</span>
      </p>
    </div>
  );
}
