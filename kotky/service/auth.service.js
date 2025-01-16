import { decodedToken } from "@/utils/jwt";
import { getLocalStorage, setToLocalStorage } from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }) => {
  return setToLocalStorage("accessToken", accessToken);
};
const getUserInfo = () => {
  const authLocalStorageDate = getLocalStorage("accessToken");

  if (authLocalStorageDate) {
    const decodedData = decodedToken(authLocalStorageDate);
    return decodedData;
  } else {
    return "";
  }
};
