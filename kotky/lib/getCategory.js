export default async function getCategory() {
  const result = await fetch(
    "https://koktky-backend.vercel.app/api/v1/category"
  );

  return result.json();
}
