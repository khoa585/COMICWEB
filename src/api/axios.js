import axios from "axios";
import md5 from "md5";
import { BASE_URL, SECRET_KEY } from "./../../config";
const unittime = Date.now();

const token = md5(unittime + SECRET_KEY);
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    unittime: unittime,
    token: token,
    ADMIN: "ADMIN",
  }
})
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;
