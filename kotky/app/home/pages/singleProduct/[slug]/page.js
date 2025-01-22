import { useProductQuery } from "@/redux/api/productApi";
import Discription from "../components/Discription";
import PhotoShow from "../components/PhotoShow";
import getProduct from "@/lib/getProduct";

export default async function page({ params }) {
  const { slug } = params;
  const postPromise = getProduct(slug);

  const product = await postPromise;

  return (
    <div className="mt-14">
      <PhotoShow product={product} />
      <Discription slug={slug} />
    </div>
  );
}
