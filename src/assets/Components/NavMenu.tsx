import { NavLink, To } from 'react-router-dom';
import { NavClassNameType } from '#/types';
import { GlobalContext } from '#Contexts/GlobalContext';
import { useContext } from 'react';

const activeNav: NavClassNameType = (datos) => {
  return datos.isActive ? 'NavPage--active' : 'NavPage';
};

function MenuLink({ to, label }: { to: To; label: string }) {
  return (
    <li>
      <NavLink to={to} className={activeNav}>
        {label}
      </NavLink>
    </li>
  );
}

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
