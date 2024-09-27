import WaterDropIcon from "@mui/icons-material/WaterDrop";
import GrassIcon from "@mui/icons-material/Grass";
import LiquorIcon from "@mui/icons-material/Liquor";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import EggIcon from "@mui/icons-material/Egg";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import SetMealIcon from "@mui/icons-material/SetMeal";

export default function Category({ title }) {
  return (
    <div className="w-[285px] h-fit bg-white shadow-custom border border-[#ececec] p-5 rounded-2xl">
      <h1 className="text-[#253D4E] text-2xl font-bold border-b border-b-[#ececec] pb-3 relative">
        {title}
        <span className="absolute bottom-0 left-0 w-2/5 h-[2px] bg-[#BCE3C9]" />
      </h1>
      <ul className="mt-2 space-y-2">
        <li className="flex items-center justify-between gap-5 border border-[#ececec] p-2 rounded">
          <SanitizerIcon className="text-3xl w-14 overflow-hidden" />
          <p className="flex justify-between w-full items-center">
            <span className="text-base">Baking material</span>
            <span className="w-6 h-6 flex items-center justify-center text-center bg-[#BCE3C9] text-[#253D4E] rounded-full">
              8
            </span>
          </p>
        </li>
        <li className="flex items-center justify-between gap-5 border border-[#ececec] p-2 rounded">
          <EggIcon className="text-3xl w-14 overflow-hidden" />
          <p className="flex justify-between w-full items-center">
            <span className="text-base">Bread and Juice</span>
            <span
              className="w-6 h-6 flex items-center justify-center text-center bg-[#BCE3C9] text-[#253D4E]
                  rounded-full"
            >
              8
            </span>
          </p>
        </li>
        <li className="flex items-center justify-between gap-5 border border-[#ececec] p-2 rounded">
          <CheckroomIcon className="text-3xl w-14 overflow-hidden" />
          <p className="flex justify-between w-full items-center">
            <span className="text-base">Clothing &amp; beauty</span>
            <span
              className="w-6 h-6 flex items-center justify-center text-center bg-[#BCE3C9] text-[#253D4E]
              rounded-full"
            >
              8
            </span>
          </p>
        </li>
        <li className="flex items-center justify-between gap-5 border border-[#ececec] p-2 rounded">
          <BrandingWatermarkIcon className="text-3xl w-14 overflow-hidden" />
          <p className="flex justify-between w-full items-center">
            <span className="text-base">Deals of The Day</span>
            <span
              className="w-6 h-6 flex items-center justify-center text-center bg-[#BCE3C9] text-[#253D4E]
                  rounded-full"
            >
              8
            </span>
          </p>
        </li>
        <li className="flex items-center justify-between gap-5 border border-[#ececec] p-2 rounded">
          <BrandingWatermarkIcon className="text-3xl w-14 overflow-hidden" />
          <p className="flex justify-between w-full items-center">
            <span className="text-base">Fresh Fruit</span>
            <span
              className="w-6 h-6 flex items-center justify-center text-center bg-[#BCE3C9] text-[#253D4E]
                  rounded-full"
            >
              8
            </span>
          </p>
        </li>
        <li className="flex items-center justify-between gap-5 border border-[#ececec] p-2 rounded">
          <SetMealIcon className="text-3xl w-14 overflow-hidden" />
          <p className="flex justify-between w-full items-center">
            <span className="text-base">Fresh Seafood</span>
            <span
              className="w-6 h-6 flex items-center justify-center text-center bg-[#BCE3C9] text-[#253D4E]
              rounded-full"
            >
              8
            </span>
          </p>
        </li>
        <li className="flex items-center justify-between gap-5 border border-[#ececec] p-2 rounded">
          <WaterDropIcon className="text-3xl w-14 overflow-hidden" />
          <p className="flex justify-between w-full items-center">
            <span className="text-base">Milks and Dairies</span>
            <span
              className="w-6 h-6 flex items-center justify-center text-center bg-[#BCE3C9] text-[#253D4E]
                  rounded-full"
            >
              8
            </span>
          </p>
        </li>
        <li className="flex items-center justify-between gap-5 border border-[#ececec] p-2 rounded">
          <GrassIcon className="text-3xl w-14 overflow-hidden" />
          <p className="flex justify-between w-full items-center">
            <span className="text-base">Vegetables</span>
            <span
              className="w-6 h-6 flex items-center justify-center text-center bg-[#BCE3C9] text-[#253D4E]
                  rounded-full"
            >
              8
            </span>
          </p>
        </li>
        <li className="flex items-center justify-between gap-5 border border-[#ececec] p-2 rounded">
          <LiquorIcon className="text-3xl w-14 overflow-hidden" />
          <p className="flex justify-between w-full items-center">
            <span className="text-base">Wines &amp; Drinks</span>
            <span
              className="w-6 h-6 flex items-center justify-center text-center bg-[#BCE3C9] text-[#253D4E]
                  rounded-full"
            >
              8
            </span>
          </p>
        </li>
        <li className="flex items-center justify-between gap-5 border border-[#ececec] p-2 rounded">
          <FormatListBulletedIcon className="text-3xl w-14 overflow-hidden" />
          <p className="flex justify-between w-full items-center">
            <span className="text-base">Uncategorized</span>
            <span
              className="w-6 h-6 flex items-center justify-center text-center bg-[#BCE3C9] text-[#253D4E]
                  rounded-full"
            >
              8
            </span>
          </p>
        </li>
      </ul>
    </div>
  );
}
