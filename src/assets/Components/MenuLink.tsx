import { useContext } from 'react';
import { MouseEvent } from 'react';
import { NavLink, To } from 'react-router-dom';
import { NavClassNameType } from '#/types';
import { GlobalContext } from '../Contexts/GlobalContext';

const activeNav: NavClassNameType = (datos) => {
  return datos.isActive ? 'NavPage--active' : 'NavPage';
};
function MenuLink({ to, label }: { to: To; label: string }) {
  // ---------- STARTING HOOKS ---------- //
  const { menuShown } = useContext(GlobalContext);

  // ---------- EVENT HANDLERS ---------- //
  const hideMenu = (_evento: MouseEvent) => {
    menuShown.set(false);
  };

  // ---------- RETURN COMPONENT ---------- //
  return (
    <li>
      <NavLink onClick={hideMenu} to={to} className={activeNav}>
        {label}
      </NavLink>
    </li>
  );
}

export default MenuLink;
