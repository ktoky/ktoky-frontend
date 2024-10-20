import Image from "next/image";
import img1 from "@/public/images/product-1-1.jpg";
import img2 from "@/public/images/product-1-2.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import LoopIcon from "@mui/icons-material/Loop";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";

export default function Card() {
  return (
    <Link
      href="/home/pages/singleProduct"
      className="group border border-[#ececec] hover:border-[#BCE3C9] rounded-2xl hover:shadow-custom group-hover:transition group-hover:duration-300 p-[25px] relative"
    >
      <div className="relative">
        <Image src={img1} alt="" className="group-hover:hidden" />
        <Image
          src={img2}
          alt=""
          className="hidden group-hover:block group-hover:scale-105"
        />
        <div className="hidden group-hover:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex gap-1 text-[#3BB77E] bg-white rounded-md">
            <p className="p-[6px] hover:text-[#FDC040] cursor-pointer">
              <i className="fa-regular fa-eye" />
              <RemoveRedEyeIcon className="scale-75" />
            </p>
            <p className="border-l border-r p-[6px] border-[#3BB77E] cursor-pointer hover:text-[#FDC040]">
              <LoopIcon className="scale-75" />
            </p>
            <p className="p-[6px] hover:text-[#FDC040] cursor-pointer">
              <FavoriteBorderIcon className="scale-75" />
            </p>
          </div>
        </div>
      </div>
      <span className="bg-[#3BB77E] text-xs rounded-tl-2xl rounded-br-[20px] px-[20px] py-[10px] min-w-[60px] min-h-[20px] absolute top-0 left-0 text-white lato">
        13%
      </span>
      <span className="text-[#adadad] text-xs mb-[5px] lato">Fresh Fruit</span>
      <p className="text-[#253d4e] text-base mb-[11px] font-bold">
        Seeds of Change Organic Red Rice
      </p>
      <div className="text-xs flex items-center gap-4 mb-[2px]">
        <div>
          <StarIcon className="text-secondary scale-75" />
          <StarIcon className="text-secondary scale-75" />
          <StarIcon className="text-secondary scale-75" />
          <StarIcon className="text-secondary scale-75" />
          <StarIcon className="text-secondary scale-75" />
        </div>
        <p className="text-[#aeaeae]">2</p>
      </div>
      <p className="text-[#b6b6b6] text-base lato">
        By <span className="text-[#3BB77E] lato">NestFood</span>
      </p>
      <div className="flex items-center justify-between mt-3">
        <p className="text-[#3BB77E] text-lg font-bold">
          $28.85 - <span className="line-through text-sm">$122.00</span>
        </p>
        <p className="bg-[#DEF9EC] px-4 py-2 rounded text-[#29A56C] gap-[2px] text-sm font-bold flex items-center justify-center">
          <ShoppingCartIcon className="scale-90" />
          Add
        </p>
      </div>
    </Link>
  );
}
