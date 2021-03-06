import { Link, useNavigate } from 'react-router-dom';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { useState } from 'react';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { login } from '../features/userSlice';
import {
   UserContainer,
   UserDivider,
   UserForm,
   UserHeader,
   UserInfo,
   UserLanguage,
   UserLogo,
} from './styledComponents/user';

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
      <UserContainer>
         <UserHeader>
            <UserLogo>
               <Link to="/">
                  <img
                     src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
                     alt="Logo"
                  />
               </Link>
            </UserLogo>
            <UserLanguage>
               <LanguageOutlinedIcon /> <span>en-US</span>
            </UserLanguage>
         </UserHeader>
         <UserInfo>
            <h2>Sign In</h2>
            <UserForm>
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
            </UserForm>
            <UserDivider>
               <hr /> <span>OR</span> <hr />
            </UserDivider>
            <Link to="/sign-up">
               <ButtonSecondary name="Create Account" />
            </Link>
         </UserInfo>
      </UserContainer>
   );
};

export default Login;
