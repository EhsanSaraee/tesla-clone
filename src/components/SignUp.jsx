import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import {
   UserContainer,
   UserDivider,
   UserForm,
   UserHeader,
   UserInfo,
   UserLanguage,
   UserLogo,
} from './styledComponents/user';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const SignUp = () => {
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const dispatch = useDispatch();
   const navigate = useNavigate();

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
            <h2>Sign Up</h2>
            <UserForm>
               <label htmlFor="firstName">First Name</label>
               <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
               />
               <label htmlFor="lastName">Last Name</label>
               <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
               />
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
               <ButtonPrimary name="Sign Up" type="submit" />
            </UserForm>
            <UserDivider>
               <hr /> <span>OR</span> <hr />
            </UserDivider>
            <Link to="/login">
               <ButtonSecondary name="Sign In" />
            </Link>
         </UserInfo>
      </UserContainer>
   );
};

export default SignUp;
