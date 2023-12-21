import axios from "axios";
// import { toast } from 'react-toastify'
import LocalStorage from "../constants/localStorage";

class Http {
  constructor() {
    this.instance = axios.create({
      // baseURL: process.env.REACT_APP_API, // địa chỉ lấy API
      baseURL: "https://dev-api-timesheet.nccsoft.vn/api/", // địa chỉ lấy API
      timeout: 10000, // ngăn chặn nó làm mất quá nhiều thời gian=> app chờ lâu
      headers: {
        "Content-Type": "application/json", // định dạng dữ liệu gữi đi=> báo cho BE-> gữi cho BE dữ liệu dưới dạng json
      },
    });
    //interceptor: dùng để xử lí phản hồi(lỗi<->thành công)
    this.instance.interceptors.response.use(
      (response) => {
        // xử lí thành công
        const result = { ...response.data, status: response.status };
        return result;
      },
      ({ response }) => {
        // hàm xử lí lỗi -Status
        if (response.status === 401) {
          console.log("response.data.message", response.data.message);
          // toast.error(response.data.message, {
          //   position: 'top-right'
          // })
        }
        const result = { ...response.data, status: response.status };
        return Promise.reject(result);
      }
    );
    //Request: Xử lí trước khi gữi dữ liệu xuống BE
    this.instance.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem(LocalStorage.accessToken);
        if (accessToken) {
          //Check nếu có token ở LocalStorage thì nạp vào header => sau đó mới gữi đi
          config.headers.authorization = accessToken;
        }
        return config;
      },
      (error) => {
        // Nếu có lỗi trong khi gữi response sẽ trả về
        return Promise.reject(error.response);
      }
    );
  }

  get(url, config = null) {
    return this.instance.get(url, config);
  }
  post(url, data, config = null) {
    return this.instance.post(url, data, config);
  }
  put(url, data, config = null) {
    return this.instance.put(url, data, config);
  }
  delete(url, data, config = null) {
    return this.instance.delete(url, {
      data,
      ...config,
    });
  }
}

const http = new Http();

export default http;
