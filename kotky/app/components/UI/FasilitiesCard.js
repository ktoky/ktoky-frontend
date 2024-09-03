import Image from "next/image";

export default function FasilitiesCard({ image, title, text }) {
  return (
    <div className="flex items-center bg-[#f4f6fa] group p-5 rounded-[10px] gap-5">
      <div className="max-w-[60px]">
        <Image
          src={image}
          alt=""
          className="group-hover:-translate-y-2 transition duration-300"
        />
      </div>
      <div>
        <h1 className="cursor-pointer mb-[5px] text-[#242424] text-lg font-semibold">
          {title}
        </h1>
        <p className="lato text-[#adadad]">{text}</p>
      </div>
    </div>
  );
}
