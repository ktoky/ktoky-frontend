import CatalogMagic from "./CatalogMagic";
import Skeleton from "./Skeleton";

export default function ProductSkeleton() {
  return (
    <main className="px-3 flex gap-8 justify-center items-center">
      <div>
        <div className="bgSubccription rounded-[20px] px-[50px] md:px-20 py-[40px] md:py-[70px] flex justify-between items-center ">
          <div>
            <Skeleton width="150px" height="40px" className="mb-[15px]" />
            <Skeleton width="200px" height="20px" />
          </div>
          <div className="hidden lg:flex gap-5">
            {[...Array(5)].map((_, index) => (
              <Skeleton key={index} width="80px" height="30px" />
            ))}
          </div>
        </div>
        <div className="hidden lg:flex gap-5">
          {[...Array(3)].map((_, index) => (
            <CatalogMagic key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
