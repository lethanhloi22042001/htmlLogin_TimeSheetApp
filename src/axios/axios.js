import axios from "axios";
import LocalStorage from '../constants/localStorage'

const instance = axios.create({
  baseURL: "https://dev-api-timesheet.nccsoft.vn/",
  // baseURL: "https://dev-api-timesheet.nccsoft.vn/api/",
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json' // định dạng dữ liệu gữi đi 
  }
});

  //interceptor để xử lý lỗi từ phản hồi của API (dùng then catch)
  // instance.interceptors.response.use((response) => {
  //   const { data } = response;
  //   return response.data;
  // });
  instance.interceptors.response.use(
    response => {  
      const result = { ...response.data, status: response.status }
      return result
    },
    ({ response }) => { 
      if (response.status === 401) {
      console.log('response.data.message',response.data.message);
      }
      const result = { ...response.data, status: response.status }
      return Promise.reject(result)
    }
  )

instance.interceptors.request.use(
  config => {

    // if (accessToken) { 
      config.headers.authorization =  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjQwODk0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFkbWluIiwiQXNwTmV0LklkZW50aXR5LlNlY3VyaXR5U3RhbXAiOiI2OTU1MTJhZS0xZGNjLTUzYzMtM2ZjOC0zOWZmMjY1Y2ExYzgiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBZG1pbiIsInN1YiI6IjQwODk0IiwianRpIjoiMmNkMTdlOTUtNWJhZS00NzZiLTlhYjUtZmQwNGRiODBkNDU0IiwiaWF0IjoxNzAzMDQxMTYxLCJuYmYiOjE3MDMwNDExNjEsImV4cCI6MTcxMTY4MTE2MSwiaXNzIjoiVGltZXNoZWV0IiwiYXVkIjoiVGltZXNoZWV0In0.Dcuc6N7N9TmeG7cOExixxqxbAcfedlsbi4H1ccELlOw';
    // }
    return config
  },
  error => { 
    return Promise.reject(error.response)
  }
)

export default instance;
