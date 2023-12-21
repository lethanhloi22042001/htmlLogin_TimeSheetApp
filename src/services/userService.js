
import axios from "../axios/axios";
const url_Login = 'TokenAuth/Authenticate'

 const get_AllCode = () => {
  return axios.get(`api/services/app/AbsenceType/GetAll`);
};
 const GetAllProjectIdByCurrentPM = () => {
  return axios.get(`api/services/app/AutoLockTimesheetSetting/GetAllProjectIdByCurrentPM`);
};
const post_UserLogin = (payload) => {
  // return axios.post(`TokenAuth/Authenticate`,payload);
  // return axios.post(`https://dev-api-timesheet.nccsoft.vn/api/TokenAuth/Authenticate`,payload);
};
export { get_AllCode,post_UserLogin,GetAllProjectIdByCurrentPM };
