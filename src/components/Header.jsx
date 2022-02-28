import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { css } from '@emotion/react';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
   return (
      <HeaderContainer>
         <HeaderLogo>
            <Link to="\">
               <HeaderLogoImg
                  src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
                  alt="header"
               />
            </Link>
         </HeaderLogo>
         <HeaderLinks>
            <MenuLink to="/">Model S</MenuLink>
            <MenuLink to="/">Model 3</MenuLink>
            <MenuLink to="/">Model X</MenuLink>
            <MenuLink to="/">Model Y</MenuLink>
            <MenuLink to="/">Solar Roof</MenuLink>
            <MenuLink to="/">Solar Panels</MenuLink>
         </HeaderLinks>
         <HeaderRight>
            <RightMenuLink to="/">Shop</RightMenuLink>
            <RightMenuLink to="/login">Tesla Account</RightMenuLink>
            <HeaderMenu onClick={() => setIsMenuOpen(!isMenuOpen)}>
               {isMenuOpen ? <CloseIcon /> : <MenuRoundedIcon />}
            </HeaderMenu>
         </HeaderRight>
      </HeaderContainer>
   );
};

const HeaderContainer = styled.section`
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: sticky;
   z-index: 5;
   top: 0;
   left: 0;
   right: 0;
   padding: 25px;
   padding-top: 15px;
`;

const HeaderLogo = styled.div``;

const HeaderLogoImg = styled.img`
   object-fit: contain;
   flex: 1;
   width: 90px;
   margin-right: 100px;
`;

const HeaderLinks = styled.div`
   display: flex;
   gap: 15px;
`;

const LinkStyles = css`
   text-decoration: none;
   text-transform: uppercase;
   color: black;
   font-size: 15px;
   font-weight: 500;
`;

const MenuLink = styled(Link)`
   ${LinkStyles}
`;

const HeaderRight = styled.div`
   display: flex;
   align-items: center;
   gap: 15px;
`;

const RightMenuLink = styled(Link)`
   ${LinkStyles}
   z-index: 0;
   position: relative;
`;

const HeaderMenu = styled.div`
   .MuiSvgIcon-root {
      cursor: pointer;
      position: relative;
      z-index: 5;
   }
`;

export default Header;
