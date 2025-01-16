import Discription from "../components/Discription";
import PhotoShow from "../components/PhotoShow";

export default function page({ params }) {
  const { slug } = params;
  console.log(slug, "slug");
  return (
    <div className="mt-14">
      <PhotoShow />
      <Discription />
    </div>
  );
}
