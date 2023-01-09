import { NavLink, To } from 'react-router-dom';
import { NavClassNameType } from '#/types';

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

export default MenuLink;
