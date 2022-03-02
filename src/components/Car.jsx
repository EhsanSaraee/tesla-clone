import styled from '@emotion/styled';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';

const Car = ({ imgSrc, model, testDrive }) => {
   return (
      <CarContainer>
         <CarImg>
            <img src={imgSrc} alt="" />
         </CarImg>
         <CarModel>{model}</CarModel>
         <CarActions>
            <ButtonPrimary name="order" />
            {testDrive && <ButtonSecondary name="test drive" />}
         </CarActions>
         <CarInfo>
            <span>Request a Call</span> to speak with a product specialist,
            value your trade-in or apply for leasing
         </CarInfo>
      </CarContainer>
   );
};

const CarContainer = styled.section`
   display: grid;
   place-items: center;
   border-top: 1px solid #d0d1d2;
`;

const CarImg = styled.div`
   img {
      object-fit: contain;
      width: 1000px;
   }
`;

const CarModel = styled.h2`
   font-weight: 500;
   font-size: xx-large;
   margin-top: -180px;
   text-transform: capitalize;
`;

const CarActions = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;
   margin-top: -40px;

   button {
      width: 230px;
      margin-bottom: 30px;
   }
`;

const CarInfo = styled.p`
   max-width: 350px;
   text-align: center;
   font-size: smaller;
   line-height: 1.5;
   font-weight: 500;
   color: #393c41;

   span {
      color: #3e6be2;
      cursor: pointer;
   }
`;

export default Car;
