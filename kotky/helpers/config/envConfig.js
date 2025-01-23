export const getBaseUrl = () => {
  return process.envNEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1";
};
