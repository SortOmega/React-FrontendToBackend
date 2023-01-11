import MenuLink from './MenuLink';
import { GlobalContext } from '#Contexts/GlobalContext';
import { useContext } from 'react';
import './sass/NavMenu.scss';

function NavMenu() {
  const { theme } = useContext(GlobalContext);
  return (
    <header className={`${theme.get}`}>
      <h1>SortOmega</h1>
      <div className='Menu'>
        <input id='toggleMenu' type='checkbox' />
        <label
          id='labelMenu'
          className='material-symbols-rounded'
          htmlFor='toggleMenu'>
          menu
        </label>
        <ul>
          <MenuLink to='/' label='Home' />
          <MenuLink to='/about' label='About' />
          <MenuLink to='/login' label='Log In' />
          <MenuLink to='/dashboard' label='Dashboard' />
        </ul>
      </div>
    </header>
  );
}

export default NavMenu;
