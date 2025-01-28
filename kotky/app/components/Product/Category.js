"use client";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SanitizerIcon from "@mui/icons-material/Sanitizer";

import { useCategoryQuery } from "@/redux/api/categoryApi";
import { useState } from "react";

export default function Category({ title, setSearchTerm }) {
  const query = {};
  const { data } = useCategoryQuery({ ...query });
  console.log(data, "here");
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const handleCategoryChange = (id) => {
    console.log(id, "id");
    if (id) {
      setSearchTerm(id);
      setSelectedCategoryId(id);
    }
  };

  return (
    <div className="lg:w-[285px] w-full h-fit bg-white shadow-custom border border-[#ececec] p-5 rounded-2xl">
      <h1 className="text-[#253D4E] text-2xl font-bold border-b border-b-[#ececec] pb-3 relative">
        {title}
        <span className="absolute bottom-0 left-0 w-2/5 h-[2px] bg-[#BCE3C9]" />
      </h1>
      <ul className="mt-2 space-y-2">
        {data?.categories?.map((category) => (
          <li
            key={category?.id}
            onClick={() => handleCategoryChange(category?.id)}
            className={`flex items-center justify-between gap-5 p-2 rounded ${
              selectedCategoryId === category?.id
                ? "border-green-500"
                : "border-[#ececec]"
            } border`}
          >
            <SanitizerIcon className="text-3xl w-14 overflow-hidden" />
            <p className="flex justify-between w-full items-center">
              <span className="text-base">{category?.name}</span>
              <span className="w-6 h-6 flex items-center justify-center text-center bg-[#BCE3C9] text-[#253D4E] rounded-full">
                8
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
