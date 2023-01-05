import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';
import { getCookie } from '#/assets/Functions/AuthCookie';
import stylesModule from './styles/Dashboard.module.scss';

function Dashboard() {
  // ------- HOOKS DECLARATIONS ------- //

  // ------- HANDLE ACTION EVENTS ------- //

  // ------- RETURN COMPONENT ------- //
  if (!!!getCookie('jwt'))
    return <Navigate to='/signin' state={{ logged: false }} />;
  return (
    <>
      <Helmet title='Dashboard' />
      <div className={`${stylesModule.HomeContainer}`}>
        This is the dashboard!
      </div>
    </>
  );
}

export default Dashboard;
