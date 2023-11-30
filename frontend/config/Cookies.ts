import Cookies from "universal-cookie";

export const cookies = new Cookies(null, { path: "/" });
export const userToken = cookies.get("user_token");
