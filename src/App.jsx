import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';

const App = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <BrowserRouter>
         <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
         {isMenuOpen && <Menu />}
      </BrowserRouter>
   );
};

export default App;
