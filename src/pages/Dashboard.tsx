import { Helmet } from 'react-helmet-async';
import { Navigate, Outlet } from 'react-router-dom';
import { getCookie } from '#/assets/Functions/AuthCookie';
import DashboardMenu from '#/assets/Components/DashboardMenu';
import stylesModule from './styles/Dashboard.module.scss';

function Dashboard() {
  // ------- HOOKS DECLARATIONS ------- //

  // ------- HANDLE ACTION EVENTS ------- //

  // ------- RETURN COMPONENT ------- //
  if (!!!getCookie('jwt'))
    return <Navigate to='/login/signin' state={{ logged: false }} />;
  return (
    <>
      <Helmet title='Dashboard' />
      <div className={`${stylesModule.DashboardContainer}`}>
        <DashboardMenu />
        <div className={stylesModule.DbContent}>
          This is the dashboard!
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
