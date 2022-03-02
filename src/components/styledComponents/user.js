import styled from '@emotion/styled';

export const UserContainer = styled.section`
   padding: 25px;
   padding-top: 15px;
   height: 100vh;
   gap: 50px;
   display: flex;
   flex-direction: column;
`;

export const UserHeader = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: sticky;
   top: 0;
`;

export const UserLogo = styled.div`
   a {
      img {
         object-fit: contain;
         width: 90px;
      }
   }
`;

export const UserLanguage = styled.div`
   display: flex;
   align-items: flex-end;
   gap: 5px;
   padding: 5px 10px;
   cursor: pointer;
   border-radius: 50px;
   font-size: 15px;
   transition: all 0.2s;

   span {
      font-weight: 500;
   }

   &:hover {
      background-color: hsla(0, 0%, 50%, 0.125);
   }
`;

export const UserInfo = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
   min-width: 330px;
   margin-left: auto;
   margin-right: auto;

   h2 {
      font-size: 32px;
      font-weight: 500;
      margin-left: -10px;
   }
`;

export const UserForm = styled.form`
   display: flex;
   flex-direction: column;

   label {
      color: #5c5e62;
      font-size: 15px;
      font-weight: 500;
      padding-left: 20px;
   }

   input {
      margin-bottom: 20px;
      background-color: #f4f4f4;
      border: 1px solid #f4f4f4;
      outline: none;
      border-radius: 50px;
      padding: 12px 20px;
      color: #393c41;
      font-weight: 600;

      &:focus {
         border: 1px solid #d6d6d6;
         transition: all 0.2s;
      }
   }
`;

export const UserDivider = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 10px;

   hr {
      width: 40%;
      height: 0;
      opacity: 0.3;
   }

   span {
      font-weight: 500;
      color: #5c5e62;
   }
`;
