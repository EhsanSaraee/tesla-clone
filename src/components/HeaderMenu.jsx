import Header from './Header';
import HeaderBlock from './HeaderBlock';
import Menu from './Menu';

const HeaderMenu = ({ isMenuOpen, setIsMenuOpen }) => {
   return (
      <>
         <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
         {isMenuOpen && <Menu />}
         <HeaderBlock />
      </>
   );
};

export default HeaderMenu;
