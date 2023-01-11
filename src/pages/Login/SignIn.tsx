import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';
import { DashboardLoggedType } from '#/types';
import stylesModule from '../styles/Login.module.scss';
import { FetchPostLogin } from '#/assets/Functions/FetchServer';

function SignIn() {
  // ------- HOOKS DECLARATIONS ------- //
  const LoginInitData = { email: '', password: '' };
  const [loginData, setLoginData] = useState(LoginInitData);
  const GoToPage = useNavigate();
  const { state }: DashboardLoggedType = useLocation();

  // ------- HANDLE ACTION EVENTS ------- //
  const handleOnChangeInputs = (evento: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target;

    setLoginData({
      ...loginData,
      [name]: name !== 'email' ? value : value.toLowerCase(),
    });
  };

  const handleSubmit = async (evento: FormEvent) => {
    evento.preventDefault();

    try {
      const Success = await FetchPostLogin(loginData);
      if (Success) GoToPage('/dashboard');
    } catch (error) {
      console.log(error);
      if (TypeError()) {
        alert('ERROR 404: No se pudo realizar una conexión al servidor!');
      }
    }
  };
  // ------- RETURN COMPONENT ------- //

  return (
    <>
      <Helmet title='Log In' />
      {state === null ? <></> : !state.logged && <DeniedDashboard />}
      <form className={`${stylesModule.LoginForm}`} onSubmit={handleSubmit}>
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
            pattern={
              '^[a-z]+[a-z0-9_-]+(?:.[a-z0-9_-]+)*@(?:omega.support.com)$'
            }
            value={loginData.email}
            placeholder={'example@omega.support.com'}
            onChange={handleOnChangeInputs}
          />
          <label htmlFor='password'>Contraseña:</label>
          <input
            id='password'
            type={'password'}
            name='password'
            required={true}
            placeholder={'Your Password'}
            value={loginData.password}
            onChange={handleOnChangeInputs}
          />
        </div>
        <div className={`${stylesModule.LoginForm__Submit}`}>
          <Link to={'/login/signup'}>
            No tienes una cuenta? Registrate aqui!
          </Link>
          <button>Login</button>
        </div>
      </form>
    </>
  );
}

const DeniedDashboard = () => {
  return (
    <div className={`${stylesModule.DeniedNav}`}>
      You must authenticate to access Dashboard!
    </div>
  );
};

export default SignIn;
