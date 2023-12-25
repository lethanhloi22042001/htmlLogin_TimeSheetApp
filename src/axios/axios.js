import axios from "axios";
import LocalStorage from "../constants/localStorage";

const instance = axios.create({
  baseURL: "https://dev-api-timesheet.nccsoft.vn/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  (response) => {
    const result = { ...response.data, status: response.status };
    return result;
  },
  ({ response }) => {
    if (response.status === 401) {
      console.log("response.data.message", response.data.message);
    }
    const result = { ...response.data, status: response.status };
    return Promise.reject(result);
  }
);

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(LocalStorage.accessToken)
    if (accessToken) {
    config.headers.authorization = accessToken ;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

export default instance;
