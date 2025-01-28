import Category from "../Product/Category";

export default function ProductSidebar({ setSearchTerm }) {
  return (
    <div className="w-full lg:w-[285px]">
      <Category setSearchTerm={setSearchTerm} title="Category" />
    </div>
  );
}
