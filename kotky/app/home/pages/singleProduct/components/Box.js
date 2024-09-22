import img1 from "@/public/images/banner-1.png";
import img2 from "@/public/images/banner-2.png";
import Image from "next/image";

export default function Box() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl text-[#1d1d1f] text-center font-semibold mt-44">
        What’s in the Box
      </h1>
      <div className="flex items-center justify-center gap-20 bg-[#FBFBFD] mt-20">
        <div>
          <Image src={img1} alt="" className="md:w-[185px] w-[100px]" />
          <p className="text-xs text-[#1d1d1f] text-center">
            iPhone 15 Pro Max
          </p>
        </div>
        <div>
          <Image src={img2} alt="" className="md:w-[100px] w-[50px]" />
          <p className="text-xs text-[#1d1d1f] text-center">
            iPhone 15 Pro Max
          </p>
        </div>
      </div>
      <p className="font-semibold text-[#6e6e73] text-sm text-center mt-16">
        Our environmental goals.
      </p>
      <p className="font-normal text-[#6e6e73] text-sm text-center mt-16 p-5 lg:p-0">
        As part of our efforts to reach carbon neutrality by 2030, iPhone 15 Pro
        and iPhone 15 Pro Max do not include a power adapter or EarPods.
        Included in the box is a USB‑C Charge Cable that supports fast charging
        and is compatible with USB‑C power adapters and computer ports.
      </p>
      <p className="font-normal text-[#6e6e73] text-sm text-center mt-5 p-5 lg:p-0">
        We encourage you to use any compatible USB‑C power adapter. If you need
        a new Apple power adapter or headphones, they are available for
        purchase.
      </p>
    </div>
  );
}
