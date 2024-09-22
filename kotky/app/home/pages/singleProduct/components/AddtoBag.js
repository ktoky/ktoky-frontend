import Image from "next/image";
import img from "@/public/images/banner-1.png";

export default function AddtoBag() {
  return (
    <div className="mt-20 bg-[#F5F5F7] flex items-start flex-wrap md:flex-nowrap gap-10 md:gap-0 pb-5 md:pb-0 pt-8 justify-between px-5 md:px-10 lg:px-40">
      <div>
        <h1 className="text-[38px] pb-14 leading-[46px] font-semibold text-[#1d1d1f]">
          Your new iPhone 15.
          <br />
          <span className="text-[#86868b]">
            Just the way you
            <br />
            want it.
          </span>
        </h1>
        <Image src={img} alt="Add To Bag Image" />
      </div>
      <div className="space-y-5">
        <p className="text-[17px] font-normal leading-[25px] text-[#1d1d1f]">
          iPhone 15 512GB Green
        </p>
        <p className="text-[17px] leading-[25px] text-[#1d1d1f] font-semibold">
          $679.00 after trade-in ($1,129.00 due today)
        </p>
        <button className="bg-[#0077ED] px-20 font-normal text-[17px] leading-[20px] text-white rounded-md py-3">
          Add to Bag
        </button>
      </div>
    </div>
  );
}
