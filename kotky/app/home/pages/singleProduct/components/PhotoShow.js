"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
// import Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "@/public/images/banner-1.png";
import img2 from "@/public/images/banner-2.png";
import img3 from "@/public/images/banner-3.png";
import img4 from "@/public/images/banner-5-min.png";
import { useEffect, useState } from "react";

import Image from "next/image";
import Star from "@mui/icons-material/Star";
import Weight from "./Weight";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "@mui/icons-material";

export default function PhotoShow() {
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [storage, setStorage] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="block p-5 max-w-7xl mx-auto lg:p-0 lg:flex gap-10">
        <div>
          <Swiper
            navigation={true}
            pagination={true}
            modules={[Pagination, Navigation]}
            className="mySwiper sticky max-w-3xl rounded-xl"
            style={{
              "@media (maxWidth: 768px)": {
                ".swiper-button-prev, .swiper-button-next": {
                  display: "none",
                },
              },
            }}
          >
            <SwiperSlide>
              <div className="w-full h-full flex justify-center items-center">
                <Image
                  src={img1}
                  alt="Image 1"
                  className="max-w-full max-h-full object-cover object-right"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image src={img2} alt="Image 1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image src={img3} alt="Image 1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <Image src={img4} alt="Image 1" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="mt-5 lg:mt-0">
          <h1 className="text-2xl md:text-4xl text-Emphasis font-bold">
            Seeds of Change Organic Quinoa, Brown
          </h1>
          <div className="flex items-center gap-2 text-sm">
            <div>
              <Star className="text-yellow-300 text-lg" />
              <Star className="text-yellow-300 text-lg" />
              <Star className="text-yellow-300 text-lg" />
              <Star className="text-yellow-300 text-lg" />
              <Star className="text-yellow-300 text-lg" />
            </div>
            (32 reviews)
          </div>
          <h1 className="text-3xl md:text-6xl font-bold text-primary mt-5">
            $38
          </h1>
          <p className="text-sm md:text-base text-primary mt-3 font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus
            dolore impedit fuga eum eligendi.
          </p>
          <div className="flex gap-3 md:gap-5 items-center mt-5">
            <p className="font-semibold text-sm">Size/Weight:</p>
            <Weight />
          </div>
          <div className="flex gap-5 mt-6 items-center">
            <Input
              type="number"
              className="border-Emphasis text-lg max-w-16 h-10"
              defaultValue="1"
            />
            <Button variant="default" size="lg" className="hover:bg-primary">
              <ShoppingCart />
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
