
import axios from "../axios/axios";
const post_UserLogin = (payload) => {
  return axios.post(`TokenAuth/Authenticate`,payload);
};
export { post_UserLogin };

