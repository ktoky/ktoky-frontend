import Image from "next/image";

export default function CategoryCard({ img }) {
  return (
    <div className="bg-[#F4F6FA] rounded-[10px] px-[30px] pt-10 pb-7 hover:bg-white border border-[#BCE3C9] transition duration-150 group cursor-pointer hover:shadow-custom flex items-center justify-center flex-col">
      <div>
        <Image
          src={img}
          alt=""
          className="hover:scale-105 transition duration-300"
        />
      </div>
      <h1 className="text-[#253D4E] text-center mt-5 mb-1 group-hover:text-[#3BB77E] font-bold leading-[1.2] text-base">
        Wines &amp; Alcohol
      </h1>
      <span className="text-[15px] font-normal text-[#7e7e7e] lato">
        2 items
      </span>
    </div>
  );
}
