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
                  {isMenuOpen ? <CloseIcon /> : <MenuRoundedIcon />}
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

const TeslaAccountHeader = styled.div``;

const TeslaAccountLogo = styled.div``;

const TeslaAccountLinks = styled.div``;

const TeslaAccountMenu = styled.div``;

const TeslaAccountInfo = styled.div``;

const TeslaAccountPerson = styled.div``;

const TeslaAccountInfoRight = styled.div``;

const TeslaAccountCar = styled.div``;

export default TeslaAccount;
