import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import stylesModule from '../../styles/Users.module.scss';
function UsersPage() {
  return (
    <>
      <Helmet title='Usuarios' />
      <div className={`${stylesModule.UserListContainer}`}>
        La pagina de Usuarios <Outlet />
      </div>
    </>
  );
}

export default UsersPage;
