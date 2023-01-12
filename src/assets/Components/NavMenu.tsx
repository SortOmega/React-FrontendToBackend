import { MdMenu, MdClose } from 'react-icons/md';
import MenuLink from './MenuLink';
import { GlobalContext } from '#Contexts/GlobalContext';
import { useContext, ChangeEvent } from 'react';
import './sass/NavMenu.scss';

function NavMenu() {
  // ---------- STARTING HOOKS ---------- //
  const { theme, menuShown } = useContext(GlobalContext);

  // ---------- EVENT HANDLERS ---------- //
  const handleMenuChange = (_evento: ChangeEvent) => {
    menuShown.set(!menuShown.get);
  };
  const DisplayIcon = () => {
    return !menuShown.get ? <MdMenu /> : <MdClose />;
  };
  // ---------- RETURN COMPONENT ---------- //
  return (
    <header className={`${theme.get}`}>
      <h1>SortOmega</h1>
      <div className='Menu'>
        <input
          id='toggleMenu'
          type='checkbox'
          checked={menuShown.get}
          onChange={handleMenuChange}
        />
        <label id='labelMenu' className='ReactIconSVG' htmlFor='toggleMenu'>
          <DisplayIcon />
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
