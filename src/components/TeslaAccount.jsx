import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Car from './Car';

const TeslaAccount = ({ isMenuOpen, setIsMenuOpen }) => {
   const logout = () => {};

   return (
      <TeslaAccountContainer>
         <TeslaAccountHeader>
            <TeslaAccountLogo>
               <Link to="\tesla-account">
                  <img
                     src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
                     alt="header"
                  />
               </Link>
            </TeslaAccountLogo>
            <TeslaAccountLinks>
               <Link to="/tesla-account">Model S</Link>
               <Link to="/tesla-account">Model 3</Link>
               <Link to="/tesla-account">Model X</Link>
               <Link to="/tesla-account">Model Y</Link>
               <Link to="/tesla-account">Solar Roof</Link>
               <Link to="/tesla-account">Solar Panels</Link>
               <Link to="/tesla-account">Shop</Link>
               <Link to="/tesla-account">Tesla Account</Link>
               <Link onClick={logout}>Logout</Link>
               <TeslaAccountMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <TeslaAccountCloseMenu /> : <MenuRoundedIcon />}
               </TeslaAccountMenu>
            </TeslaAccountLinks>
         </TeslaAccountHeader>
         <TeslaAccountInfo>
            <TeslaAccountPerson>
               <h4>Tesla</h4>
            </TeslaAccountPerson>
            <TeslaAccountInfoRight>
               <Link>Home</Link>
               <Link>Account</Link>
               <Link>History</Link>
               <Link onClick={logout}>Sign out</Link>
            </TeslaAccountInfoRight>
         </TeslaAccountInfo>
         <TeslaAccountCar>
            <Car
               imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
               model="model s"
               testDrive
            />
            <Car
               imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
               model="model x"
            />
         </TeslaAccountCar>
      </TeslaAccountContainer>
   );
};

const TeslaAccountContainer = styled.section``;

const TeslaAccountHeader = styled.div`
   padding: 7px 20px;
   padding-top: 15px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: #222222;
   color: white;
`;

const TeslaAccountLogo = styled.div`
   a {
      img {
         object-fit: contain;
         width: 80px;
         filter: brightness(0) invert(1);
      }
   }
`;

const TeslaAccountLinks = styled.div`
   display: flex;
   gap: 20px;
   align-items: center;

   a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      text-transform: uppercase;
      font-size: 15px;
      z-index: 0;
   }
`;

const TeslaAccountMenu = styled.div`
   z-index: 2;

   .MuiSvgIcon-root {
      cursor: pointer;
   }
`;

const TeslaAccountCloseMenu = styled(CloseIcon)`
   color: black;
`;

const TeslaAccountInfo = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 60px 140px;
   padding-bottom: 30px;
`;

const TeslaAccountPerson = styled.div`
   h4 {
      font-weight: 500;
      text-transform: capitalize;
      font-size: x-large;
   }
`;

const TeslaAccountInfoRight = styled.div`
   display: flex;
   gap: 20px;

   a {
      text-decoration: none;
      color: #393c41;
      font-size: smaller;
      transition: all 0.2s;
      text-transform: capitalize;

      &:hover {
         color: black;
         font-weight: 500;
      }
   }
`;

const TeslaAccountCar = styled.div`
   display: grid;
   place-items: center;
   gap: 30px;
   padding-bottom: 40px;
`;

export default TeslaAccount;
