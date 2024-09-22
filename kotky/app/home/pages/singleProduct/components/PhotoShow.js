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
import AddtoBag from "./AddtoBag";

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
            className="mySwiper sticky max-w-4xl rounded-xl"
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
        <div>
          <div className="space-y-5 mb-[80px]">
            <h1 className="text-2xl text-[#86868b] font-semibold">
              <span className="text-[#1d1d1f]">Model.</span> Which is best for
              you?
            </h1>
            {data.modelList?.map((Phonemodel, i) => (
              <div
                key={i}
                onClick={() => setModel(Phonemodel.name)}
                className={`flex items-center cursor-default justify-between p-3 border border-black rounded-xl ${
                  model === Phonemodel.name
                    ? "ring-2 border-0 ring-blue-500"
                    : ""
                }`}
              >
                <div>
                  <h3 className="text-[17px] leading-[21px] text-[#1d1d1f] font-semibold">
                    {Phonemodel.name}
                  </h3>
                  <p className="text-xs text-[#1d1d1f]">
                    {Phonemodel.display}
                    <sup>1</sup>
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#1d1d1f] text-right">
                    From ${Phonemodel.price}
                    <br />
                    or ${Phonemodel.perMonth}/mo.
                    <br />
                    for {Phonemodel.monthDuration} mo.<sup>*</sup>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`space-y-10 relative mb-[100px] pointer-events-none ${
              model !== ""
                ? "cursor-default opacity-100 pointer-events-auto"
                : "opacity-50"
            }
      `}
          >
            <h1 className="text-2xl text-[#86868b] font-semibold">
              <span className="text-[#1d1d1f]">Finish.</span> Pick your favorite
              you?
            </h1>
            <div className="space-y-5">
              <h2>Color - Natural Titanium</h2>
              <div className="space-x-3">
                {data.ColorList?.map((phoneColor) => (
                  <span
                    key={phoneColor.color}
                    onClick={() => setColor(phoneColor.color)}
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: phoneColor.color,
                      boxShadow: "0 0 8px rgba(0, 0, 0, 0.25)",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "2px",
                      cursor: "pointer",
                      ...(color === phoneColor.color && {
                        border: "2px solid #3182ce",
                      }),
                    }}
                  ></span>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`space-y-5 cursor-default pointer-events-none ${
              model !== "" && color !== ""
                ? "opacity-100 cursor-auto pointer-events-auto"
                : "opacity-50"
            }`}
          >
            <h1 className="text-2xl text-[#86868b] font-semibold">
              <span className="text-[#1d1d1f]">Storage.</span> How much space do
              you need?
            </h1>
            {data.storageList?.map((phoneStorage, i) => (
              <div
                key={i}
                onClick={() => setStorage(phoneStorage.storage)}
                className={`flex items-center justify-between p-3 border border-black rounded-xl ${
                  storage == phoneStorage.storage &&
                  "ring-2 border-0 ring-blue-500"
                }`}
              >
                <div>
                  <h3 className="text-[17px] leading-[21px] text-[#1d1d1f] font-semibold">
                    {phoneStorage.storage}
                    <sup>2</sup>
                  </h3>
                </div>
                <div>
                  <p className="text-xs text-[#1d1d1f] text-right">
                    From ${phoneStorage.price}
                    <br />
                    or ${phoneStorage.perMonth}/mo.
                    <br />
                    for {phoneStorage.monthDuration} mo.<sup>*</sup>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`${
          !model == "" && !color == "" && !storage == "" ? "block" : "hidden"
        }`}
      >
        <AddtoBag />
      </div>
    </div>
  );
}
