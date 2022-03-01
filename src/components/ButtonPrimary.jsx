import styled from '@emotion/styled';

const ButtonPrimary = ({ name, type, onClick }) => {
   return (
      <BtnPrimary onClick={onClick} type={type}>
         {name}
      </BtnPrimary>
   );
};

const BtnPrimary = styled.button`
   background-color: #3e6ae1;
   border: none;
   outline: none;
   padding: 12px 40px;
   border-radius: 50px;
   color: #fff;
   text-transform: uppercase;
   font-weight: bold;
   cursor: pointer;
   margin-bottom: 30px;
   transition: all 0.3s;

   &:hover {
      background-color: #3457b1;
   }
`;

export default ButtonPrimary;
