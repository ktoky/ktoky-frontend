import Category from "../Product/Category";
import TagBtn from "../UI/TagBtn";

export default function ProductSidebar({ setSearchTerm }) {
  return (
    <div>
      <Category setSearchTerm={setSearchTerm} title="Category" />
    </div>
  );
}
