import styled from '@emotion/styled';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeaderBlock from './components/HeaderBlock';
import Menu from './components/Menu';

const App = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <BrowserRouter>
         <AppContainer>
            <Routes>
               <Route path="/">
                  <Header
                     isMenuOpen={isMenuOpen}
                     setIsMenuOpen={setIsMenuOpen}
                  />
                  {isMenuOpen && <Menu />}
                  <HeaderBlock />
               </Route>
               <Route path='/login' element={<Login />} />
            </Routes>
         </AppContainer>
      </BrowserRouter>
   );
};

const AppContainer = styled.section`
   position: relative;
   height: 100vh;
`;

export default App;
