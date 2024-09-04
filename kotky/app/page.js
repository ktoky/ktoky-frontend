import Card from "./components/Product/Card";
import HoverCard from "./components/Product/HoverCard";
import AddCard from "./components/UI/AddCard";
import img from "@/public/images/banner-1.png";
import img1 from "@/public/images/banner-2.png";
import img2 from "@/public/images/banner-3.png";
import CategoryCard from "./components/UI/CategoryCard";
import categoryImage from "@/public/images/category-2.png";
import SanitizerIcon from "@mui/icons-material/Sanitizer";
import EggIcon from "@mui/icons-material/Egg";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import SetMealIcon from "@mui/icons-material/SetMeal";
import TTRTCard from "./components/UI/TTRTCard";
import Image from "next/image";
import subscriptionBanner from "@/public/images/banner-9-min.png";
import icon1 from "@/public/images/icon-1.png";
import icon2 from "@/public/images/icon-2.png";
import icon3 from "@/public/images/icon-3.png";
import icon4 from "@/public/images/icon-4.png";
import icon5 from "@/public/images/icon-5.png";
import FasilitiesCard from "./components/UI/FasilitiesCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import GrassIcon from "@mui/icons-material/Grass";
import LiquorIcon from "@mui/icons-material/Liquor";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import CloseIcon from "@mui/icons-material/Close";

export default function Home() {
  return (
    <>
      {/* Main Content Start */}
      <main className="px-3">
        <div className="flex gap-8">
          {/* Sidebar Start */}
          <aside className="flex flex-col gap-10">
            {/* Category Start */}
            <div className="w-[285px] h-fit bg-white shadow-custom border border-[#ececec] p-5 rounded-2xl">
              <h1 className="text-[#253D4E] text-2xl font-bold border-b border-b-[#ececec] pb-3 relative">
                Category
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
            {/* Category Ends */}
            <div className="w-[285px] h-fit bg-white shadow-custom border border-[#ececec] p-5 rounded-2xl">
              <h1 className="text-[#253D4E] text-2xl font-bold border-b border-b-[#ececec] pb-[20px] mb-[30px] relative">
                Product Tags
                <span className="absolute bottom-0 left-0 w-2/5 h-[2px] bg-[#BCE3C9]" />
              </h1>
              <div className="flex items-center flex-wrap gap-2">
                <p className="hover:-translate-y-2 border text-[#3BB77E] leading-7 border-[#ececec] bg-white rounded-[30px] shadow-custom py-1 pr-4 pl-[20px] font-bold text-[15px] transition duration-300">
                  <CloseIcon className="scale-75" />
                  <span>Brown</span>
                </p>
                <p className="hover:-translate-y-2 border text-[#3BB77E] leading-7 border-[#ececec] bg-white rounded-[30px] shadow-custom py-1 pr-4 pl-[20px] font-bold text-[15px] transition duration-300">
                  <CloseIcon className="scale-75" />
                  <span>Coffes</span>
                </p>
                <p className="hover:-translate-y-2 border text-[#3BB77E] leading-7 border-[#ececec] bg-white rounded-[30px] shadow-custom py-1 pr-4 pl-[20px] font-bold text-[15px] transition duration-300">
                  <CloseIcon className="scale-75" />
                  <span>Hodo Foods</span>
                </p>
                <p className="hover:-translate-y-2 border text-[#3BB77E] leading-7 border-[#ececec] bg-white rounded-[30px] shadow-custom py-1 pr-4 pl-[20px] font-bold text-[15px] transition duration-300">
                  <CloseIcon className="scale-75" />
                  <span>Meats</span>
                </p>
                <p className="hover:-translate-y-2 border text-[#3BB77E] leading-7 border-[#ececec] bg-white rounded-[30px] shadow-custom py-1 pr-4 pl-[20px] font-bold text-[15px] transition duration-300">
                  <CloseIcon className="scale-75" />
                  <span>Organic</span>
                </p>
                <p className="hover:-translate-y-2 border text-[#3BB77E] leading-7 border-[#ececec] bg-white rounded-[30px] shadow-custom py-1 pr-4 pl-[20px] font-bold text-[15px] transition duration-300">
                  <CloseIcon className="scale-75" />
                  <span>Snack</span>
                </p>
              </div>
            </div>
          </aside>
          {/* Sidebar End */}
          <div className="w-full">
            {/* Banner Start */}
            <div className="bg h-[538px] w-full bg-cover bg-no-repeat bg-center px-[100px] py-[50px] rounded-[30px]">
              <h1 className="text-7xl leading-none font-bold mb-10">
                Fresh Vegetables <br /> Big discount
              </h1>
              <p className="text-3xl mb-16 text-[#7E7E7E] lato font-semibold">
                Save up to 50% off on your first order
              </p>
              <div className="bg-white max-w-[450px] rounded-[50px] h-16 flex">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full h-full rounded-[50px] px-[30px] lato border-none outline-none placeholder:font-bold"
                />
                <button className="h-full rounded-[50px] px-[30px] border-none outline-none text-base  bg-[#3BB77E] text-white">
                  subscribe
                </button>
              </div>
            </div>
            {/* Banner End */}
            {/* Populer Product Start */}
            <div>
              {/* Navigation start */}
              <div className="flex items-center justify-between mt-5">
                <p className="text-[#253D4E] text-3xl font-bold pb-3 lato">
                  Populer Products
                </p>
                <ul className="flex items-center gap-7">
                  <li className="text-[#3BB77E] hover:-translate-y-1 cursor-pointer duration-300 font-semibold text-lg">
                    All
                  </li>
                  <li className="text-[#253D4E] hover:text-[#3BB77E] hover:-translate-y-1 cursor-pointer duration-300 font-semibold text-lg">
                    Baking material
                  </li>
                  <li className="text-[#253D4E] hover:text-[#3BB77E] hover:-translate-y-1 cursor-pointer duration-300 font-semibold text-lg">
                    Fresh Fruits
                  </li>
                  <li className="text-[#253D4E] hover:text-[#3BB77E] hover:-translate-y-1 cursor-pointer duration-300 font-semibold text-lg">
                    Milks &amp; Dairies
                  </li>
                  <li className="text-[#253D4E] hover:text-[#3BB77E] hover:-translate-y-1 cursor-pointer duration-300 font-semibold text-lg">
                    Meats
                  </li>
                  <li className="text-[#253D4E] hover:text-[#3BB77E] hover:-translate-y-1 cursor-pointer duration-300 font-semibold text-lg">
                    Vagetables
                  </li>
                </ul>
              </div>
              {/* Navigation Ends */}
              {/* Product Card start */}
              <div className="grid grid-cols-4 gap-5 mb-10">
                <Card />
              </div>
              {/* Product Card Ends */}
              {/* Deals Start */}
              <h1 className="capitalize text-[#253D4E] text-2xl font-bold mb-5">
                Deals of the day
              </h1>
              <div className="grid grid-cols-4 gap-5">
                <HoverCard />
              </div>
              {/* Deals Ends */}
            </div>
            {/* Populer Product End */}
          </div>
        </div>
        <div className="grid grid-cols-3 mt-20 gap-5">
          <AddCard img={img} />
          <AddCard img={img1} />
          <AddCard img={img2} />
        </div>
        {/* Category Start */}
        <div className="flex items-center justify-between gap-10 my-8">
          <div className="flex items-center gap-10">
            <h1 className="text-[#253d4e] text-[32px] font-bold">
              Shop by Categories
            </h1>
            <p className="flex items-center gap-1 text-[#3BB77E] cursor-pointer justify-center">
              <span className="lato">All Categories</span>
              <KeyboardArrowRightIcon />
            </p>
          </div>
          <div className="flex items-center gap-3">
            <p className="bg-[#F2F3F4] hover:bg-[#3BB77E] text-[#7E7E7E] hover:text-white cursor-pointer transition duration-200 rounded-[50%] text-2xl h-10 w-10 flex items-center justify-center">
              {/* <i className="fa-solid fa-arrow-left" /> */}
              <ArrowBackIcon />
            </p>
            <p className="bg-[#F2F3F4] hover:bg-[#3BB77E] text-[#7E7E7E] hover:text-white cursor-pointer transition duration-200 rounded-[50%] text-2xl h-10 w-10 flex items-center justify-center">
              <ArrowForwardIcon />
            </p>
          </div>
        </div>
        <div className="grid grid-cols-8 gap-5">
          <CategoryCard img={categoryImage} />
          <CategoryCard img={categoryImage} />
          <CategoryCard img={categoryImage} />
          <CategoryCard img={categoryImage} />
          <CategoryCard img={categoryImage} />
          <CategoryCard img={categoryImage} />
          <CategoryCard img={categoryImage} />
          <CategoryCard img={categoryImage} />
        </div>
        {/* Category Ends */}
        {/* Top Selling, Trending Products, Recently added, Top Rated Start */}
        <div className="grid grid-cols-4 gap-4">
          <div className="my-10">
            <h1 className="text-[#253D4E] text-2xl font-bold border-b border-b-[#ececec] pb-3 relative">
              Top Selling
              <span className="absolute bottom-0 left-0 w-20 h-[2px] bg-[#BCE3C9]" />
            </h1>
            <div className="flex items-center flex-col">
              <TTRTCard />
              <TTRTCard />
              <TTRTCard />
            </div>
          </div>
          <div className="my-10">
            <h1 className="text-[#253D4E] text-2xl font-bold border-b border-b-[#ececec] pb-3 relative">
              Trending Products
              <span className="absolute bottom-0 left-0 w-20 h-[2px] bg-[#BCE3C9]" />
            </h1>
            <div className="flex items-center flex-col">
              <TTRTCard />
              <TTRTCard />
              <TTRTCard />
            </div>
          </div>
          <div className="my-10">
            <h1 className="text-[#253D4E] text-2xl font-bold border-b border-b-[#ececec] pb-3 relative">
              Recently added
              <span className="absolute bottom-0 left-0 w-20 h-[2px] bg-[#BCE3C9]" />
            </h1>
            <div className="flex items-center flex-col">
              <TTRTCard />
              <TTRTCard />
              <TTRTCard />
            </div>
          </div>
          <div className="my-10">
            <h1 className="text-[#253D4E] text-2xl font-bold border-b border-b-[#ececec] pb-3 relative">
              Top Rated
              <span className="absolute bottom-0 left-0 w-20 h-[2px] bg-[#BCE3C9]" />
            </h1>
            <div className="flex items-center flex-col">
              <TTRTCard />
              <TTRTCard />
              <TTRTCard />
            </div>
          </div>
        </div>
        {/* Top Selling, Trending Products, Recently added, Top Rated Ends */}
        {/* Subscription Start */}
        <div className="bgSubccription mb-10 rounded-[20px] relative bg-cover bg-center bg-no-repeat w-full min-h-[230px]">
          <div className="px-[78px] py-[84px]">
            <h1 className="mb-5 text-7xl leading-none text-[#253D4E] font-bold">
              Stay home &amp; get your daily
              <br />
              needs from our shop
            </h1>
            <p className="font-lato text-lg mb-[45px]">
              Start Your Daily Shopping with{" "}
              <span className="font-lato text-[#3BB77E]">Nest Mart</span>
            </p>
            <div className="bg-white max-w-[450px] rounded-[50px] h-16 flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full h-full rounded-[50px] px-[30px] lato border-none outline-none placeholder:font-bold"
              />
              <button className="h-full rounded-[50px] px-[30px] border-none outline-none text-base  bg-[#3BB77E] text-white">
                subscribe
              </button>
            </div>
          </div>
          <Image
            src={subscriptionBanner}
            className="w-2/5 absolute bottom-0 right-[50px]"
            alt=""
          />
        </div>
        {/* Subscription Ends */}
        <div className="grid grid-cols-5 gap-5">
          <FasilitiesCard
            image={icon1}
            title="Best prices &amp; offers"
            text="Orders $50 or more"
          />
          <FasilitiesCard
            image={icon2}
            title={"Free Delivery"}
            text={"24/7 amazing services"}
          />
          <FasilitiesCard
            image={icon3}
            title={"Great daily deal"}
            text={"When you sign up"}
          />
          <FasilitiesCard
            image={icon4}
            title={"Wide assortment"}
            text={"Mega Discounts"}
          />
          <FasilitiesCard
            image={icon5}
            title={"Easy returns"}
            text={"Within 30 days"}
          />
        </div>
      </main>
      {/* Main content End */}
    </>
  );
}
