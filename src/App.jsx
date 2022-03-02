import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HeaderMenu from './components/HeaderMenu';
import Login from './components/Login';
import Menu from './components/Menu';
import PrivateRoute from './components/PrivateRoute';
import SignUp from './components/SignUp';
import TeslaAccount from './components/TeslaAccount';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

const App = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const user = useSelector(selectUser);
   const dispatch = useDispatch();

   useEffect(() => {
      auth.onAuthStateChanged((userAuth) => {
         if (userAuth) {
            // User is signed in
            dispatch(
               login({
                  email: userAuth.email,
                  uid: userAuth.uid,
                  displayName: userAuth.displayName,
               })
            );
         } else {
            // User is signed out
            dispatch(logout());
         }
      });
   }, [dispatch]);

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
               <Route
                  path="/tesla-account"
                  element={
                     <PrivateRoute>
                        <TeslaAccount
                           isMenuOpen={isMenuOpen}
                           setIsMenuOpen={setIsMenuOpen}
                        />
                        {isMenuOpen && <Menu />}
                     </PrivateRoute>
                  }
               ></Route>
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
