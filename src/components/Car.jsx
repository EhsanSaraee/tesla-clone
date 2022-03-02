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

const CarContainer = styled.section``;

const CarImg = styled.div``;

const CarModel = styled.h2``;

const CarActions = styled.div``;

const CarInfo = styled.p``;

export default Car;
