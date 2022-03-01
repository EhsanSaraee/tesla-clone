import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useState } from 'react';
import Button from './Button';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const signIn = (event) => {
      event.preventDefault();
   };

   return (
      <LoginContainer>
         <LoginHeader>
            <LoginLogo>
               <Link>
                  <img
                     src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
                     alt="Logo"
                  />
               </Link>
            </LoginLogo>
            <LoginLanguage>
               <LanguageOutlinedIcon /> <span>en-US</span>
            </LoginLanguage>
         </LoginHeader>
         <LoginInfo>
            <h2>Sign In</h2>
            <LoginForm>
               <label htmlFor="email">Email Address</label>
               <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
               />
               <label htmlFor="password">Password</label>
               <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
               />
               <Button name="Sign In" type="submit" onClick={signIn}></Button>
            </LoginForm>
         </LoginInfo>
      </LoginContainer>
   );
};

const LoginContainer = styled.section``;

const LoginHeader = styled.div``;

const LoginLogo = styled.div``;

const LoginLanguage = styled.div``;

const LoginInfo = styled.div``;

const LoginForm = styled.form``;

export default Login;
