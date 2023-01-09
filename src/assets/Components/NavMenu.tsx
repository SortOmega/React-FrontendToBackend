import MenuLink from './MenuLink';
import { GlobalContext } from '#Contexts/GlobalContext';
import { useContext } from 'react';

function NavMenu() {
  const { theme } = useContext(GlobalContext);
  return (
    <header className={`${theme.get}`}>
      <h1>SortOmega</h1>
      <ul>
        <MenuLink to='/' label='Home' />
        <MenuLink to='/about' label='About' />
        <MenuLink to='/login' label='Log In' />
        <MenuLink to='/dashboard' label='Dashboard' />
      </ul>
    </header>
  );
}

export default NavMenu;
