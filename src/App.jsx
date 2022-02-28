import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

const App = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <BrowserRouter>
         <div className="App">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
         </div>
      </BrowserRouter>
   );
};

export default App;
