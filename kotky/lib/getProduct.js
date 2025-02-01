export default async function getProduct(slug) {
  const result = await fetch(
    `https://koktky-backend.vercel.app/api/v1/product/${slug}`
  );

  return result.json();
}
