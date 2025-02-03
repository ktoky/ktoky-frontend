import Descriptions from "../components/Descriptions";
import PhotoShow from "../components/PhotoShow";
import getProduct from "@/lib/getProduct";

export default async function page({ params }) {
  const { slug } = params;
  const postPromise = getProduct(slug);

  const product = await postPromise;

  return (
    <div className="mt-14">
      <PhotoShow product={product} />
      <Descriptions slug={slug} product={product}/>
    </div>
  );
}
