import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function AddCard({ img }) {
  return (
    <div className="relative">
      <div className="rounded-[10px]">
        <Image src={img} alt="" className="rounded-[10px]" />
      </div>
      <div className="absolute top-[50%] translate-y-[-50%] px-[50px]">
        <h1 className="capitalize font-bold mb-[15px] min-h-[100px] text-2xl lato">
          Everyday fresh &amp; <br />
          clean with
          <br />
          our products
        </h1>
        <button className="flex items-center justify-center text-white gap-1 bg-[#3BB77E] text-xs py-[7px] pr-2 pl-3">
          <span className="lato">Shop Now</span>
          <ArrowForwardIcon className="scale-75" />
        </button>
      </div>
    </div>
  );
}
