"use client";

import CategoryCard from "./CategoryCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Swiper, SwiperSlide } from "swiper/react";
import categoryImage from "@/public/images/category-2.png";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useCategoryQuery } from "@/redux/api/categoryApi";

export default function CategoryCardSlider() {
  const query = {};
  const { data, isLoading } = useCategoryQuery({ ...query });

  return (
    <div>
      <div className="flex items-center justify-between flex-wrap gap-10 my-8">
        <div className="flex items-center flex-wrap gap-3 md:gap-5 lg:gap-10">
          <h1 className="text-[#253d4e] text-[32px] font-bold">
            Shop by Categories
          </h1>
          <p className="flex items-center gap-1 text-[#3BB77E] cursor-pointer justify-center">
            <span className="lato">All Categories</span>
            <KeyboardArrowRightIcon />
          </p>
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <p className="bg-[#F2F3F4] swiper-Prev-video-Btn hover:bg-[#3BB77E] text-[#7E7E7E] hover:text-white cursor-pointer transition duration-200 rounded-[50%] text-2xl h-10 w-10 flex items-center justify-center">
            <ArrowBackIcon />
          </p>
          <p className="bg-[#F2F3F4] swiper-Next-video-Btn hover:bg-[#3BB77E] text-[#7E7E7E] hover:text-white cursor-pointer transition duration-200 rounded-[50%] text-2xl h-10 w-10 flex items-center justify-center">
            <ArrowForwardIcon />
          </p>
        </div>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        navigation={{
          nextEl: ".swiper-Next-video-Btn",
          prevEl: ".swiper-Prev-video-Btn",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1025: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data?.categories?.map((category) => (
          <SwiperSlide key={category?.id}>
            <CategoryCard img={category?.image} name={category?.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
