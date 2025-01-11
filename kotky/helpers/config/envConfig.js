export const getBaseUrl = () => {
  return (
    process.envNEXT_PUBLIC_API_BASE_URL ||
    "https://leather-for-luxury.vercel.app/api/v1"
  );
};
