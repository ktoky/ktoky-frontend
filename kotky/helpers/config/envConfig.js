export const getBaseUrl = () => {
  return (
    process.envNEXT_PUBLIC_API_BASE_URL ||
    "https://koktky-backend.vercel.app/api/v1"
  );
};
