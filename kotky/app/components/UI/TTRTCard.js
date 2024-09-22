import Image from "next/image";
import img from "@/public/images/product-10-1.jpg";
import StarIcon from "@mui/icons-material/Star";

export default function TTRTCard() {
  return (
    <div className="flex items-center p-4 hover:-translate-y-2 transition duration-300">
      <div className="h-[101px] w-[101px]">
        <Image src={img} alt="" className="h-auto max-w-full" />
      </div>
      <div>
        <h1 className="text-[#253d4e] hover:text-[#3bb77e] cursor-pointer mb-2 text-base font-bold leading-[1.2]">
          Haagen Caramel Cone Ice Cream Boxed
        </h1>
        <div className="flex items-center mb-1 text-xs gap-2">
          <p>
            <StarIcon className="text-secondary scale-75" />
            <StarIcon className="text-secondary scale-75" />
            <StarIcon className="text-secondary scale-75" />
            <StarIcon className="text-secondary scale-75" />
            <StarIcon className="text-secondary scale-75" />
          </p>
          <p>1</p>
        </div>
        <div className="flex items-center">
          <p className="text-[#3BB77E] text-lg font-bold underline">$22.85</p>
          <span className="text-sm text-[#adadad] font-semibold line-through">
            $24.52
          </span>
        </div>
      </div>
    </div>
  );
}
