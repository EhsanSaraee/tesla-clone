import { css } from '@emotion/react';
import styled from '@emotion/styled';

const HeaderBlock = () => {
   return (
      <HeaderBlockContainer>
         <HeaderBlockInfo>
            <HeaderBlockInfoText>
               <h2>Model 3</h2>
               <h4>
                  Order Online for <span>Touchless Delivery</span>
               </h4>
            </HeaderBlockInfoText>
            <HeaderBlockActions>
               <HeaderBlockBtnPrimary>Custom Order</HeaderBlockBtnPrimary>
               <HeaderBlockBtnSecondary>
                  Existing Inventory
               </HeaderBlockBtnSecondary>
            </HeaderBlockActions>
         </HeaderBlockInfo>
      </HeaderBlockContainer>
   );
};

const HeaderBlockContainer = styled.section`
   background: url('https://tesla-cdn.thron.com/delivery/public/image/tesla/088d64b2-afcc-43c6-9fa1-8f37e567a3d0/bvlatuR/std/2880x2400/desktop_model_3_v2')
      no-repeat center center fixed;
   background-size: cover;
   position: absolute;
   inset: 0;
   display: grid;
   place-items: center;
`;

const HeaderBlockInfo = styled.div`
   display: flex;
   flex-direction: column;
   height: 360px;
`;

const HeaderBlockInfoText = styled.div`
   text-align: center;
   flex: 1;

   h2 {
      color: #393c41;
      font-size: 38px;
      font-weight: 500;
   }

   h4 {
      font-size: 15px;
      font-weight: 400;
      color: #5c5e62;

      span {
         padding-bottom: 4px;
         padding-top: 15px;
         border-bottom: 1px solid black;
         color: #393c41;
         cursor: pointer;

         &:hover {
            border-bottom-width: 2px;
            color: black;
         }
      }
   }
`;

const HeaderBlockActions = styled.div`
   margin-top: 330px;
   display: flex;
   gap: 20px;
`;

const Btn = css`
   border: none;
   outline: none;
   cursor: pointer;
   width: 260px;
   padding-top: 12px;
   padding-bottom: 12px;
   text-transform: uppercase;
   border-radius: 50px;
   font-weight: 600;
`;

const HeaderBlockBtnPrimary = styled.button`
   ${Btn}
   background-color: #393c41;
   color: #fff;
   opacity: 0.9;
`;

const HeaderBlockBtnSecondary = styled.button`
   ${Btn}
   background-color: #fff;
   color: #393c41;
   opacity: 0.9;
`;

export default HeaderBlock;
