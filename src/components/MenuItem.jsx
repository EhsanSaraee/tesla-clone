import styled from '@emotion/styled';

const MenuItem = ({ title }) => {
   return (
      <MenuItemContainer>
         <Title>{title}</Title>
      </MenuItemContainer>
   );
};

const MenuItemContainer = styled.div``;

const Title = styled.h4``;

export default MenuItem;
