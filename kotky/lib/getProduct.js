export default async function getProduct(slug) {
  const result = await fetch(`http://localhost:5000/api/v1/product/${slug}`);

  return result.json();
}
