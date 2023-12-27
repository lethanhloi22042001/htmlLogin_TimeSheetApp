import axios from "../axios/axios";
interface ILogin_Form {
    usernameOrEmailAddress: string;
    password: string;
  }
  
const post_UserLogin = (payload:ILogin_Form) => {
  return axios.post(`TokenAuth/Authenticate`,payload);
};

const GetAllTimeSheetOfUser = (startDate:any, endDate:any) => {
  return axios.get(`MyTimesheets/GetAllTimeSheetOfUser?startDate=${startDate}&endDate=${endDate}`);
};

export { post_UserLogin,GetAllTimeSheetOfUser };

