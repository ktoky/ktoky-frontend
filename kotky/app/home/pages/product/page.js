"use client";
import ProductSidebar from "@/app/components/Layout/ProductSidebar";
import Card from "@/app/components/Product/Card";
import PriceFilter from "@/app/components/Product/PriceFilter";
import BreadCumb from "@/app/components/UI/BreadCumb";
import CatalogMagic from "@/app/components/UI/CatalogMagic";
import Dropdown from "@/app/components/UI/Dropdown";
import ProductSkeleton from "@/app/components/UI/ProductSkeleton";

import TagBtn from "@/app/components/UI/TagBtn";
import { useProductsQuery } from "@/redux/api/productApi";

export default function page() {
  const { data, isLoading } = useProductsQuery();

  console.log(data);
  if (isLoading) {
    return <ProductSkeleton />;
  }

  return (
    <main className="px-3 flex justify-between gap-8">
      <div>
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
        <div className="flex justify-between gap-8 mt-5">
          <div>
            <div className="flex justify-between flex-wrap items-center mb-3">
              <p className="text-sm font-medium text-Emphasis">
                We found <span className="text-primary">29</span> items for you!
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
                <Dropdown
                  defaultValue={"Featured"}
                  value1={"Price Low to High"}
                  value2={"Price High to Low"}
                  value3={"Release Date"}
                  value4={"Avg Rating"}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {data?.product?.map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <ProductSidebar />
            <PriceFilter />
          </div>
        </div>
      </div>
    </main>
  );
}
