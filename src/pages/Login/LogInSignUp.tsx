import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import stylesModule from '../styles/Login.module.scss';

function LogInSignUp() {
  return (
    <form className={`${stylesModule.LoginForm}`}>
      <Helmet title='Sign Up' />
      <div className={`${stylesModule.LoginForm__Title}`}>
        <h3>Register</h3>
      </div>
      <div className={`${stylesModule.LoginForm__Data}`}>
        <label htmlFor='email'>Email:</label>
        <input
          type={'email'}
          name='email'
          required={true}
          placeholder={'example@omega.support.com'}
        />
        <label htmlFor='password'>Contraseña:</label>
        <input
          type={'password'}
          name='password'
          required={true}
          placeholder={'Your Password'}
        />
      </div>
      <div className={`${stylesModule.LoginForm__Submit}`}>
        <Link to={'/login/signin'}>Ya tienes cuenta? Inicia sesion aquí!</Link>
        <button>Sign Up</button>
      </div>
    </form>
  );
}

export default LogInSignUp;
