import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import stylesModule from './styles/About.module.scss';
function About() {
  return (
    <>
      <Helmet title='Acerca de' />

      <div className={`${stylesModule.AboutContainer}`}>
        <span>Acerca de</span>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default About;
