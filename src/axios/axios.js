import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:2020",
});

//interceptor để xử lý lỗi từ phản hồi của API (dùng then catch)
instance.interceptors.response.use((response) => {
  const { data } = response;
  return response.data;
});
instance.interceptors.request.use((config) => {
  return config;
});

export default instance;
