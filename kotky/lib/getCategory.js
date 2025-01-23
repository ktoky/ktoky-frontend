export default async function getCategory() {
  const result = await fetch("http://localhost:5000/api/v1/category");

  return result.json();
}
