import stylesModule from './sass/DashboardMenu.module.scss';
import MenuLink from './MenuLink';

function DashboardMenu() {
  return (
    <div className={stylesModule.DashboardMenu}>
      <ul>
        <MenuLink to='/dashboard/main' label='Principal' />
        <MenuLink to='/dashboard/myprofile' label='Mi Perfil' />
        <MenuLink to='/dashboard/users' label='Usuarios' />
      </ul>
    </div>
  );
}

export default DashboardMenu;
