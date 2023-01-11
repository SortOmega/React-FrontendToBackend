import { MouseEvent } from 'react';
import { NavLink, To } from 'react-router-dom';
import { NavClassNameType } from '#/types';

const activeNav: NavClassNameType = (datos) => {
  return datos.isActive ? 'NavPage--active' : 'NavPage';
};

function MenuLink({ to, label }: { to: To; label: string }) {
  const hideMenu = (_evento: MouseEvent) => {
    (document.getElementById('toggleMenu') as HTMLInputElement).checked = false;
  };

  return (
    <li>
      <NavLink onClick={hideMenu} to={to} className={activeNav}>
        {label}
      </NavLink>
    </li>
  );
}

export default MenuLink;
