import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import stylesModule from '../styles/Login.module.scss';

function LoginSignIn() {
  return (
    <form className={`${stylesModule.LoginForm}`}>
      <Helmet title='Log In' />
      <div className={`${stylesModule.LoginForm__Title}`}>
        <h3>Login</h3>
      </div>
      <div className={`${stylesModule.LoginForm__Data}`}>
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          type={'email'}
          name='email'
          required={true}
          placeholder={'example@omega.support.com'}
        />
        <label htmlFor='password'>Contraseña:</label>
        <input
          id='password'
          type={'password'}
          name='password'
          required={true}
          placeholder={'Your Password'}
        />
      </div>
      <div className={`${stylesModule.LoginForm__Submit}`}>
        <Link to={'/login/signup'}>No tienes una cuenta? Registrate aqui!</Link>
        <button>Login</button>
      </div>
    </form>
  );
}

export default LoginSignIn;
