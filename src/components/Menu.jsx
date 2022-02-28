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

const MenuContainer = styled.section``;

export default Menu;
