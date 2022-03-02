import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useState } from 'react';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { login } from '../features/userSlice';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const signIn = async (event) => {
      event.preventDefault();
      try {
         const userAuth = await signInWithEmailAndPassword(email, password);
         dispatch(
            login({
               email: userAuth.user.email,
               uid: userAuth.user.uid,
               displayName: userAuth.user.displayName,
            })
         );
         navigate('/tesla-account');
      } catch (error) {
         console.log(error.message);
      }
   };

   return (
      <LoginContainer>
         <LoginHeader>
            <LoginLogo>
               <Link to="/">
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
               <ButtonPrimary name="Sign In" type="submit" onClick={signIn} />
            </LoginForm>
            <LoginDivider>
               <hr /> <span>OR</span> <hr />
            </LoginDivider>
            <Link to="/sign-up">
               <ButtonSecondary name="Create Account" />
            </Link>
         </LoginInfo>
      </LoginContainer>
   );
};

const LoginContainer = styled.section`
   padding: 25px;
   padding-top: 15px;
   height: 100vh;
   gap: 70px;
   display: flex;
   flex-direction: column;
`;

const LoginHeader = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: sticky;
   top: 0;
`;

const LoginLogo = styled.div`
   a {
      img {
         object-fit: contain;
         width: 90px;
      }
   }
`;

const LoginLanguage = styled.div`
   display: flex;
   align-items: flex-end;
   gap: 5px;
   padding: 5px 10px;
   cursor: pointer;
   border-radius: 50px;
   font-size: 15px;
   transition: all 0.2s;

   span {
      font-weight: 500;
   }

   &:hover {
      background-color: hsla(0, 0%, 50%, 0.125);
   }
`;

const LoginInfo = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
   min-width: 330px;
   margin-left: auto;
   margin-right: auto;

   h2 {
      font-size: 40px;
      font-weight: 500;
      margin-left: -10px;
   }
`;

const LoginForm = styled.form`
   display: flex;
   flex-direction: column;

   label {
      color: #5c5e62;
      font-size: 15px;
      font-weight: 500;
      padding-left: 20px;
   }

   input {
      margin-bottom: 30px;
      background-color: #f4f4f4;
      border: 1px solid #f4f4f4;
      outline: none;
      border-radius: 50px;
      padding: 12px 20px;
      color: #393c41;
      font-weight: 600;

      &:focus {
         border: 1px solid #d6d6d6;
         transition: all 0.2s;
      }
   }
`;

const LoginDivider = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 20px;

   hr {
      width: 40%;
      height: 0;
      opacity: 0.3;
   }

   span {
      font-weight: 500;
      color: #5c5e62;
   }
`;

export default Login;
