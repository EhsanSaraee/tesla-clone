import styled from '@emotion/styled';

const ButtonSecondary = ({ name, type, onClick }) => {
   return (
      <BtnPrimary onClick={onClick} type={type}>
         {name}
      </BtnPrimary>
   );
};

const BtnPrimary = styled.button`
   background-color: transparent;
   border: 3px solid #171a20;
   width: 100%;
   outline: none;
   padding: 10px 40px;
   border-radius: 50px;
   color: #171a20;
   text-transform: uppercase;
   font-weight: 600;
   cursor: pointer;
   margin-bottom: 30px;
   transition: all 0.2s ease-in-out;

   &:hover {
      background-color: #171a20;
      color: #fff;
   }
`;

export default ButtonSecondary;
