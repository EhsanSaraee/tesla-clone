import styled from '@emotion/styled';

const MenuItem = ({ title }) => {
   return (
      <MenuItemContainer>
         <h4>{title}</h4>
      </MenuItemContainer>
   );
};

const MenuItemContainer = styled.section`
   border-bottom: 1px solid #d0d1d2;
   text-align: left;
   cursor: pointer;

   h4 {
      font-size: 15px;
      font-weight: 500;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      padding-bottom: 15px;
      padding-left: 10px;
      cursor: pointer;
   }
`;

export default MenuItem;
