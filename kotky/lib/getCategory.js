export default async function getCategory() {
  const result = await fetch(
    "https://leather-for-luxury.vercel.app/api/v1/category"
  );

  return result.json();
}
