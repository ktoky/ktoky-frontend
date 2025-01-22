import Card from "./components/Product/Card";
import HoverCard from "./components/Product/HoverCard";
import AddCard from "./components/UI/AddCard";
import img from "@/public/images/banner-1.png";
import img1 from "@/public/images/banner-2.png";
import img2 from "@/public/images/banner-3.png";
import CategoryCard from "./components/UI/CategoryCard";
import categoryImage from "@/public/images/category-2.png";
import TTRTCard from "./components/UI/TTRTCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TagBtn from "./components/UI/TagBtn";
import Category from "./components/Product/Category";
import CategoryCardSlider from "./components/UI/CategoryCardSlider";

export default function Home() {
  return (
    <>
      {/* Main Content Start */}
      <main className="px-3">
        <div className="flex gap-8">
          {/* Sidebar Start */}
          <aside className="hidden md:flex flex-col gap-10">
            {/* Category Start */}

            <Category title="Category" />

            {/* Category Ends */}
            <div className="w-[285px] h-fit bg-white shadow-custom border border-[#ececec] p-5 rounded-2xl">
              <h1 className="text-[#253D4E] text-2xl font-bold border-b border-b-[#ececec] pb-[20px] mb-[30px] relative">
                Product Tags
                <span className="absolute bottom-0 left-0 w-2/5 h-[2px] bg-[#BCE3C9]" />
              </h1>
              <div className="flex items-center flex-wrap gap-2">
                <TagBtn text={"Brown"} />
                <TagBtn text={"Coffes"} />
                <TagBtn text={"Hodo Foods"} />
                <TagBtn text={"Meats"} />
                <TagBtn text={"Organic"} />
                <TagBtn text={"Snack"} />
              </div>
            </div>
          </aside>
          {/* Sidebar End */}
          <div className="w-full">
            {/* Banner Start */}
            <div className="bg md:h-[538px] w-full bg-cover bg-no-repeat bg-center px-7 md:px-[100px] py-5 md:py-[50px] rounded-[30px]">
              <h1 className="text-3xl md:text-7xl leading-none font-bold mb-10">
                Fresh Vegetables <br /> Big discount
              </h1>
              <p className="text-base md:text-3xl mb-5 md:mb-16 text-[#7E7E7E] font-lato font-semibold">
                Save up to 50% off on your first order
              </p>
              <div className="bg-white max-w-[450px] rounded-[50px] h-14 md:h-16 flex">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="w-full h-full rounded-[50px] px-3 md:px-[30px] font-lato border-none outline-none placeholder:font-bold"
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
              <div className="flex items-center justify-between flex-wrap mt-5">
                <p className="text-[#253D4E] text-3xl font-bold pb-3 font-lato">
                  Populer Products
                </p>
                <ul className="flex items-center flex-wrap gap-x-3 gap-y-2 md:gap-7">
                  <li className="text-[#3BB77E] hover:-translate-y-1 cursor-pointer duration-300 font-semibold text-sm md:text-lg">
                    All
                  </li>
                  <li className="text-[#253D4E] hover:text-[#3BB77E] hover:-translate-y-1 cursor-pointer duration-300 font-semibold text-sm md:text-lg">
                    Baking material
                  </li>
                  <li className="text-[#253D4E] hover:text-[#3BB77E] hover:-translate-y-1 cursor-pointer duration-300 font-semibold text-sm md:text-lg">
                    Fresh Fruits
                  </li>
                  <li className="text-[#253D4E] hover:text-[#3BB77E] hover:-translate-y-1 cursor-pointer duration-300 font-semibold text-sm md:text-lg">
                    Milks &amp; Dairies
                  </li>
                  <li className="text-[#253D4E] hover:text-[#18804f] hover:-translate-y-1 cursor-pointer duration-300 font-semibold text-sm md:text-lg">
                    Meats
                  </li>
                  <li className="text-[#253D4E] hover:text-[#3BB77E] hover:-translate-y-1 cursor-pointer duration-300 font-semibold text-sm md:text-lg">
                    Vagetables
                  </li>
                </ul>
              </div>
              {/* Navigation Ends */}
              {/* Product Card start */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
              {/* Product Card Ends */}
              {/* Deals Start */}
              <h1 className="capitalize text-[#253D4E] text-2xl font-bold mb-5">
                Deals of the day
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                <HoverCard />
              </div>
              {/* Deals Ends */}
            </div>
            {/* Populer Product End */}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-5">
          {/* <AddCard img={img} />
          <AddCard img={img1} />
          <AddCard img={img2} /> */}
        </div>
        {/* Category Start */}
        <CategoryCardSlider />
        {/* Category Ends */}
        {/* Top Selling, Trending Products, Recently added, Top Rated Start */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </main>
      {/* Main content End */}
    </>
  );
}
