import axios from "axios";
import LocalStorage from "../constants/localStorage";

const instance = axios.create({
  // baseURL: "https://dev-api-timesheet.nccsoft.vn/api/",
  baseURL: "https://timesheetapi.nccsoft.vn/api/services/app/",
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

// instance.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem(LocalStorage.accessToken)
//     if (accessToken) {
//     config.headers.authorization = accessToken ;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error.response);
//   }
// );
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(LocalStorage.accessToken)
    // if (accessToken) {
    config.headers.authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjYxNjI2IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImxvaS5sZXRoYW5oIiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiJPSDU0TFM3TzdEUDVFWFdVRkNaUUNOWEQ0Q1VRUEU0ViIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkJhc2ljVXNlciIsInN1YiI6IjYxNjI2IiwianRpIjoiM2FjMTFlNjItYTA3Zi00NTI1LWE0NWEtOWZhNGM1MDc0YTkxIiwiaWF0IjoxNzAyODgxNTIyLCJuYmYiOjE3MDI4ODE1MjIsImV4cCI6MTcxMTUyMTUyMiwiaXNzIjoiVGltZXNoZWV0IiwiYXVkIjoiVGltZXNoZWV0In0.hwP_Ex5-1K6LrHQbUdLGS2ElPAxs3F3P8cp2xn7s5VU" ;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

export default instance;
