import Box from "./components/Box";
import PhotoShow from "./components/PhotoShow";

export default function page() {
  return (
    <div className="mt-14">
      <div className="pl-5 max-w-7xl mx-auto lg:pl-0">
        <p className="text-[#bf4800] text-[17px] leading-[25px]">New</p>
        <h1 className="text-[#1d1d1f] text-4xl tracking-[-.003em] leading-[1.08349] md:text-5xl font-semibold">
          Buy iPhone 15 Pro
        </h1>
        <p className="text-[#1d1d1f] text-sm font-normal mt-5">
          From $1599 or $66.62/mo.per month for 24 mo.monthsFootnote*
        </p>
      </div>
      <div className="mt-20">
        <PhotoShow />
        <Box />
      </div>
    </div>
  );
}
