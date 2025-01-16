export default async function getProduct(slug) {
  const result = await fetch(
    `https://leather-for-luxury.vercel.app/api/v1/product/${slug}`
  );

  return result.json();
}
