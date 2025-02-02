"use client";
import ProductSidebar from "@/app/components/Layout/ProductSidebar";
import Card from "@/app/components/Product/Card";
import PriceFilter from "@/app/components/Product/PriceFilter";
import BreadCumb from "@/app/components/UI/BreadCumb";

import Dropdown from "@/app/components/UI/Dropdown";
import ProductSkeleton from "@/app/components/UI/ProductSkeleton";

import TagBtn from "@/app/components/UI/TagBtn";
import { useProductsQuery } from "@/redux/api/productApi";
import { useDebounced } from "@/redux/hooks";
import { useState } from "react";

export default function page() {
  const query = {};

  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  console.log(query, "sea");
  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }
  const { data, isLoading } = useProductsQuery({ ...query });
  console.log(data, "data");
  if (isLoading) {
    return <ProductSkeleton />;
  }
  const onPaginationChange = (page, pageSize) => {
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination, filter, sorter) => {
    const { order, field } = sorter;

    setSortBy(field);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const handleDropdownChange = (value) => {
    let field, order;

    switch (value) {
      case "Price Low to High":
        field = "price";
        order = "asc";
        break;
      case "Price High to Low":
        field = "price";
        order = "desc";
        break;
      case "Release Date":
        field = "createdAt";
        order = "desc";
        break;
      default:
        field = "createdAt";
        order = "desc";
    }

    onTableChange(null, null, { field, order });
  };

  return (
    <main className="px-3 flex justify-between gap-8  w-full">
      <div className="w-full">
        <div className="bgSubccription rounded-[20px] px-[50px] md:px-20 py-[40px] md:py-[70px] flex justify-between items-center">
          <div>
            <h1 className="text-5xl mb-[15px] text-Emphasis font-bold">
              Snack
            </h1>
            <BreadCumb bLink1="Home" bLink2="Shop" bItem="Snack" />
          </div>
          <div className="hidden lg:flex gap-5">
            <TagBtn text="Cabbage" />
            <TagBtn text="Broccoli" />
            <TagBtn text="Artichoke" />
            <TagBtn text="Celery" />
            <TagBtn text="Spinach" />
          </div>
        </div>
        <div className="flex justify-between gap-8 mt-5 w-full flex-wrap-reverse lg:flex-nowrap  ">
          <div className="w-full">
            <div className="flex justify-between flex-wrap items-center mb-3">
              <p className="text-sm font-medium text-Emphasis">
                We found{" "}
                <span className="text-primary">{data?.product?.length}</span>{" "}
                items for you!
              </p>
              <div className="flex items-center gap-5">
                <Dropdown
                  defaultValue={"Size"}
                  value1={"50"}
                  value2={"100"}
                  value3={"150"}
                  value4={"200"}
                  value5={"All"}
                />
                <select
                  defaultValue={"createdAt"}
                  onChange={(e) => handleDropdownChange(e.target.value)}
                >
                  <option value="createdAt">Featured</option>
                  <option value="Price Low to High">Price Low to High</option>
                  <option value="Price High to Low">Price High to Low</option>
                  <option value="Release Date">Release Date</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full">
              {data?.product && data.product.length > 0 ? (
                data?.product?.map((card) => <Card key={card.id} card={card} />)
              ) : (
                <div className="flex justify-center items-center h-40">
                  <p className="text-center col-span-full text-gray-500">
                    No products available.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="block w-full lg:w-[285px]">
            <ProductSidebar setSearchTerm={setSearchTerm} />
          </div>
        </div>
      </div>
    </main>
  );
}
