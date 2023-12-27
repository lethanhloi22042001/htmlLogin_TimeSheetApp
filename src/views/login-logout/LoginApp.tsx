import React, { useEffect, useState } from "react";
import '../../public/css/login-logout/LoginApp.scss'
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { unwrapResult } from "@reduxjs/toolkit";
import { RootState, useAppDispatch } from "../../redux/storage";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { postUser, } from "./sliceLogin";
import {Navigate,useNavigate} from 'react-router-dom'
//New
// import {userAllCard1} from '../../component/section1/sliceCard1'


interface LoginProps {}

interface ILogin_Form {
  usernameOrEmailAddress: string;
  password: string;
}

const LoginApp: React.FC<LoginProps> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ILogin_Form>();

  const dispatch = useAppDispatch();
  //New
  
  const navigate = useNavigate();

  const submitForm = async (data: any) => {
    const { usernameOrEmailAddress, password } = data || {};
    const body: ILogin_Form = {
      usernameOrEmailAddress: usernameOrEmailAddress,
      password: password,
    };
    try {
      const res = await dispatch(postUser(body));
      unwrapResult(res);
      console.log('res',res);
      
      navigate('app');
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <>
    <div className="main_app">
      <div className="container">
        <a className="textTe">Timesheet</a>
        <form onSubmit={handleSubmit(submitForm)} className="form-login">
          <div className="loginTex">Log in</div>
          <div className={`input-field `}>
            <div className="iconP">
              <UserOutlined></UserOutlined>
            </div>
            <div className="inputEnter">
              <input
                {...register("usernameOrEmailAddress",
                //  {
                //     required: `Vui lòng nhập vào usernameOrEmailAddress`,
                //     // maxLength: 30,
                //     maxLength: {
                //       value :30 ,
                //       message: `Email không được dài quá 30 kí tự`
                //     },
                //     minLength: {
                //       value :5 ,
                //       message: `Email không được ít hơn 5 kí tự`
                //     },
                //     pattern: {
                //       value: /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
                //       message: 'Email không đúng định dạng',
                //     },
                //   }
                )}
                type="text"
                name="usernameOrEmailAddress"
                id="usernameOrEmailAddress"
                required
              />
              <label htmlFor="usernameOrEmailAddress">User name or Email</label>
              <span
                style={{
                  color: "red",
                  position: "absolute",
                  left: 0,
                  top: "45px",
                }}
              >
                {errors.usernameOrEmailAddress &&
                  errors.usernameOrEmailAddress.message}
              </span>
            </div>
          </div>

          <div className={`input-field`}>
            <div className="iconP">
              <LockOutlined></LockOutlined>
            </div>
            <div className="inputEnter">
              <input
                {...register(
                  "password",
                    // {
                    //   required: `Vui lòng nhập vào pass word`,
                    //   maxLength: {
                    //     value :30 ,
                    //     message: `Pass word không được dài quá 30 kí tự`
                    //   },
                    //   minLength: {
                    //     value :5 ,
                    //     message: `Pass word không được ít hơn 5 kí tự`
                    //   },
                    // }
                )}
                type="password"
                name="password"
                id="password"
                autoComplete="current-password" //Gợi ý nhập
                required
              />
              <label htmlFor="password">PassWord</label>
              <span
                style={{
                  color: "red",
                  position: "absolute",
                  left: 0,
                  top: "45px",
                }}
              >
                {errors.password && errors.password.message}
              </span>
            </div>
          </div>

          <div className="rememberLogin">
            <div className="btn_remember">
              <input type="checkbox" id="rememberBtn" name="rememberBtn" />
              <label htmlFor="rememberBtn">Remember me</label>
            </div>

            <input id="submit" className="btn_button" type="submit" />
          </div>

          <div className="loginGG">
            <Button className="btn_buttonGG">Login With Google</Button>
          </div>
        </form>
        <p className="p_bottom">© 2023 Timesheet Version 4.3.0.0 [20232011]</p>
      </div>
     </div>
    </>
  );
};
export default LoginApp;
