import { Helmet } from 'react-helmet-async';
import { GlobalContext } from '#Contexts/GlobalContext';
import { useContext } from 'react';
import stylesModule from './styles/HomePage.module.scss';

function HomePage() {
  const { theme } = useContext(GlobalContext);
  return (
    <>
      <Helmet title='Welcome Home!' />
      <div className={`${stylesModule.HomeContainer}`}>
        Welcome
        <button
          onClick={() => {
            theme.get === 'LightMode'
              ? theme.set('DarkMode')
              : theme.set('LightMode');
          }}>
          Change Theme
        </button>
      </div>
    </>
  );
}

export default HomePage;
