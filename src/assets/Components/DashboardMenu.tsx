import stylesModule from './sass/DashboardMenu.module.scss';
import MenuLink from './MenuLink';

function DashboardMenu() {
  return (
    <div className={stylesModule.DashboardMenu}>
      <ul>
        <MenuLink to='/dashboard' label='Principal' />
        <MenuLink to='/dashboard/user-info' label='Principal2' />
        <MenuLink to='/dashboard/user-profile' label='Principal3' />
      </ul>
    </div>
  );
}

export default DashboardMenu;
