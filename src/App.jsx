import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

const App = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <BrowserRouter>
         <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </BrowserRouter>
   );
};

export default App;
