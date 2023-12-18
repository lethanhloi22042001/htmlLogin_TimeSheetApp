import React, { useEffect, useState } from 'react';
import '../../public/css/views/login.css';
import { Button, } from 'antd';
import { UserOutlined, LockOutlined,  } from '@ant-design/icons';


interface LoginProps {
  // Các prop mà component nhận vào, nếu có
}

const Login: React.FC<LoginProps> = () => {
  // Sử dụng state nếu cần
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLabelActive, setIsLabelActive] = useState<boolean>(false);

  // Xử lý sự kiện khi người dùng thay đổi giá trị input
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
 

  // Xử lý sự kiện khi người dùng nhấn nút đăng nhập
  const handleLogin = () => {
    // Thực hiện các xử lý đăng nhập ở đây
    console.log('Username:', username);
    console.log('Password:', password);
  };
  const handleInputClick = () => {
    console.log('true');
    
    setIsLabelActive(true);
  };
  const handleOnblue = () => {
    console.log('false');
    
    setIsLabelActive(false);
  };
  

  return (
<>
      <div className='form-logins'>
        <a>Timesheet</a>
        <div className='form-login'>
          <a>Log in</a>
          <div className='input-fields'>
            <div className='iconUser'>
              <UserOutlined />
            </div>
            <div className={`input-enter ${isLabelActive ? 'active' : ''}`}>
              <label htmlFor='username'  >
                Username:
              </label>
              <input
                type='text'
                id='username'
                name='username'
                value={username}
                onChange={handleUsernameChange}
                onBlur={handleOnblue}
                onClick={handleInputClick}
              />
            </div>
             
          </div>
          <div className='input-fields2'>
            <div className='icon-u'>
                <LockOutlined></LockOutlined>
            </div>
            <div className='inputEnter'>
                <label htmlFor="test">Password</label>
                <input type="text" id='test' name='test'/>
            </div>

          </div>

          <div className='input-fields'>{/* Your other input field here */}</div>
          <Button type="primary">Login</Button>
        </div>
        <p>© 2023 Timesheet Version 4.3.0.0 [20232011]</p>
      </div>
    </>
  );
};

export default Login;
