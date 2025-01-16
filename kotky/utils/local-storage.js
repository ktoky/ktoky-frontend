export const setToLocalStorage = (key, token) => {
  if (!key || typeof window === "undefined") {
    return "set your key value";
  }

  localStorage.setItem(key, token);
};

export const getLocalStorage = (key) => {
  return localStorage.getItem(key);
};
