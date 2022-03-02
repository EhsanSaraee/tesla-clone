import styled from '@emotion/styled';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HeaderMenu from './components/HeaderMenu';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { selectUser } from './features/userSlice';

const App = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const user = useSelector(selectUser);

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
               <Route
                  path="/login"
                  element={user ? <Navigate to="\tesla-account" /> : <Login />}
               />
               <Route path="/sign-up" element={<SignUp />} />
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
