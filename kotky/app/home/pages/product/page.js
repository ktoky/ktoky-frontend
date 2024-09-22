import ProductSidebar from "@/app/components/Layout/ProductSidebar";
import Card from "@/app/components/Product/Card";
import PriceFilter from "@/app/components/Product/PriceFilter";
import BreadCumb from "@/app/components/UI/BreadCumb";
import Dropdown from "@/app/components/UI/Dropdown";
import TagBtn from "@/app/components/UI/TagBtn";

export default function page() {
  return (
    <main className="px-3 flex justify-between gap-8">
      <div>
        <div className="bgSubccription rounded-[20px] px-20 py-[70px] flex justify-between items-center">
          <div>
            <h1 className="text-5xl mb-[15px] text-Emphasis font-bold">
              Snack
            </h1>
            <BreadCumb bLink1="Home" bLink2="Shop" bItem="Snack" />
          </div>
          <div className="flex gap-5">
            <TagBtn text="Cabbage" />
            <TagBtn text="Broccoli" />
            <TagBtn text="Artichoke" />
            <TagBtn text="Celery" />
            <TagBtn text="Spinach" />
          </div>
        </div>
        <div className="flex justify-between gap-8 mt-5">
          <div>
            <div className="flex justify-between items-center mb-3">
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
            <div className="grid grid-cols-5 gap-5">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div>
            <ProductSidebar />
            <PriceFilter />
          </div>
        </div>
      </div>
    </main>
  );
}
