import styled from '@emotion/styled';
import { menuData } from '../database/menuData';
import MenuItem from './MenuItem';

const Menu = () => {
   return (
      <MenuContainer>
         {menuData?.map((item) => (
            <MenuItem {...item} key={item.id} />
         ))}
      </MenuContainer>
   );
};

const MenuContainer = styled.section`
   position: fixed;
   overflow-y: scroll;
   top: 0;
   right: 0;
   bottom: 0;
   padding: 70px 20px 20px 20px;
   background-color: white;
   z-index: 1;
   display: flex;
   flex-direction: column;
   min-width: 280px;
   gap: 25px;

   -ms-overflow-style: none;
   scrollbar-width: none;

   ::-webkit-scrollbar {
      display: none;
   }
`;

export default Menu;
