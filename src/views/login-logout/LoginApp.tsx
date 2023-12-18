import React, { useEffect, useState } from "react";
import '../../public/css/views/loginApp.css';
import { UserOutlined, LockOutlined,  } from '@ant-design/icons';
import { Button, } from 'antd';
// getUsers
import {getAllUsers} from "../../services/userService";
//Today
import { useForm, SubmitHandler } from "react-hook-form"

interface LoginProps{

}
type Inputs = {
    userName: string
    passWord: string
  }
  

const LoginApp: React.FC<LoginProps> = ()=>{
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log('DATA FORM',data)

    //Today
    const [username,setUsername] = useState<string>('');
    const [password,setPassword] = useState<string>('');

    useEffect( ()=>{
      const usernameValue =  watch('userName');
      const passwordValue =  watch('passWord');
      if (usernameValue !== username) {
        setUsername(usernameValue);
        console.log(username);
        
      }
  
      if (passwordValue !== password) {
        setPassword(passwordValue);
        console.log(password);
      }

    },[username] );

    const [isLabelActiveEmail,setIsLabelActiveEmail] = useState<boolean>(false);
    const [isLabelActivePassWord,setIsLabelActivePassWord] = useState<boolean>(false);

    const handleClickEmail = () => {
        setIsLabelActiveEmail(true);
      }
    const handleClickBlurEmail = () => {
        if (username === '') {
            setIsLabelActiveEmail(false);
          }
      }
    const handleClickPassword = () => {
        setIsLabelActivePassWord(true);
      }
    
    const handleClickBlurPassword = () => {
        if (password === '') {
            setIsLabelActivePassWord(false);
          }
      }
    const handleOnchangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
        console.log('username',e.target.value);
      }
    
      const handleOnchangePassWord = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        console.log('password',e.target.value);
      }

    return(
        <>

            <div className="container">
                <a className="textTe">Timesheet</a>
                <form onSubmit={handleSubmit(onSubmit)} className="form-login">
                    <div className="loginTex">Log in</div>

                     <div className={`input-field ${isLabelActiveEmail ? 'active' : ''} `}>
                         <div className="iconP">
                                <UserOutlined></UserOutlined>
                         </div>
                         <div className="inputEnter" >
                            <label htmlFor="userName">User name or Email</label>
                            <input  
                                {...register("userName")}
                                type="text" name="userName" id="userName" 

                                // value={username}
                                // onChange={handleOnchangeEmail}
                                // onFocus={handleClickEmail}
                                // onBlur={handleClickBlurEmail}
                            />

                         </div>
                     </div>

                     <div className={`input-field ${isLabelActivePassWord ? 'active' : ''} `}>
                         <div className="iconP">
                                <LockOutlined></LockOutlined>
                         </div>
                         <div className="inputEnter">
                            <label htmlFor="passWord">PassWord</label>
                            <input   
                             {...register("passWord" )}
                             type="password" name="passWord" id="passWord" 
                            //  value={password}
                            // onChange={handleOnchangePassWord}
                            // onFocus={handleClickPassword}
                            //  onBlur={handleClickBlurPassword}
                            />
                         </div>
                     </div>
                     
                     <div className="rememberLogin">
                        <div className="btn_remember">
                            <input type="checkbox" id='rememberBtn' name="rememberBtn"/>
                            <label htmlFor="rememberBtn">Remember me</label>
                        </div>
                        {/* <Button className="btn_button">Login</Button> */}
                        <input className="btn_button" type="submit" />
                     </div>

                     <div className="loginGG">
                        <Button className="btn_buttonGG">Login With GG</Button>
                     </div>
                </form>
                <p className="p_bottom">© 2023 Timesheet Version 4.3.0.0 [20232011]</p>
            </div>
        </>
    )
}
export default LoginApp;
 