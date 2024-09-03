import Image from "next/image";
import img from "@/public/images/banner-5-min.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function HoverCard() {
  return (
    <div>
      <div className="w-[282px] h-[285px]">
        <Image
          src={img}
          className="w-full h-full object-cover rounded-[15px]"
          alt=""
        />
      </div>
      <div className="w-[86%] mx-auto bg-white rounded-[10px] shadow-custom py-[25px] px-[30px] relative transitio duration-300 hover:-translate-y-2 -mt-[90px]">
        <h3 className="text-[#253D4E] leading-[1.2] mb-[11px] text-base font-bold">
          Organic Cage Grade A Large Eggs
        </h3>
        <p className="text-[#B6B6B6] lato">
          By <span className="text-[#3BB77E] lato">Hambger Hel</span>
        </p>
        <div className="flex items-center mt-3 justify-between">
          <p className="pt-[5px]">
            <span className="text-[#3BB77E] text-lg font-bold underline mr-[6px]">
              $21.00
            </span>
            <span className="text-[13px] font-semibold text-[#adadad] line-through">
              <span className="underline">$24.00</span>
            </span>
          </p>
          <p className="bg-[#DEF9EC] px-4 py-2 rounded text-[#29A56C] gap-[2px] text-sm font-bold flex items-center justify-center">
            <ShoppingCartIcon className="scale-90" />
            Add
          </p>
        </div>
      </div>
    </div>
  );
}
