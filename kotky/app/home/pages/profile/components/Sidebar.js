"use client";
import Link from "next/link";
import { useState } from "react";

export default function Sidebar() {
  const [color, setColor] = useState("profile");
  const handleColor = (e) => {
    setColor(e);
  };
  return (
    <div className="h-full text-white w-72">
      <ul className="px-5 py-3 space-y-1 bg-primary rounded-r-lg">
        <Link className="block" href="/home/pages/profile">
          <li
            onClick={() => handleColor("profile")}
            className={`text-lg font-semibold cursor-pointer py-2 transition-colors duration-300 ${
              color === "profile" ? "bg-white text-black" : "hover:bg-white"
            } hover:text-black pl-3 rounded-md`}
          >
            Profile
          </li>
        </Link>
        <Link className="block" href="/home/pages/profile/myOrder">
          <li
            onClick={() => handleColor("myOrder")}
            className={`text-lg font-semibold cursor-pointer py-2 transition-colors duration-300 ${
              color === "myOrder" ? "bg-white text-black" : "hover:bg-white"
            } hover:text-black pl-3 rounded-md`}
          >
            My Order
          </li>
        </Link>
      </ul>
    </div>
  );
}
