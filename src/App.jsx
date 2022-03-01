import styled from '@emotion/styled';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderMenu from './components/HeaderMenu';
import Login from './components/Login';

const App = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <BrowserRouter>
         <AppContainer>
            <Routes>
               <Route
                  path="/"
                  element={
                     <HeaderMenu
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                     />
                  }
               />
               <Route path="/login" element={<Login />} />
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
