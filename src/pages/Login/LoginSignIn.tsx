import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';
import { ServerLoginResponse } from '#/types';
import { setCookie } from '#/assets/Functions/AuthCookie';
import stylesModule from '../styles/Login.module.scss';

function LoginSignIn() {
  // ------- HOOKS DECLARATIONS ------- //
  const LoginInitData = { email: '', password: '' };
  const [loginData, setLoginData] = useState(LoginInitData);

  // ------- HANDLE ACTION EVENTS ------- //
  const handleOnChangeInputs = (evento: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target;

    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (evento: FormEvent) => {
    evento.preventDefault();

    try {
      let headersList = {
        'Accept': '*/*',
        'Content-Type': 'application/json',
      };

      let bodyContent = JSON.stringify(loginData);

      let response = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        body: bodyContent,
        headers: headersList,
      });

      let data: ServerLoginResponse = await response.json();

      if (data.Id === 200) {
        console.log(data);
        setCookie('jwt', data.jwt, 1);
      } else alert(data.responseMessage);
    } catch (error) {
      console.log(error);
    }
  };
  // ------- RETURN COMPONENT ------- //
  return (
    <form className={`${stylesModule.LoginForm}`} onSubmit={handleSubmit}>
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
          onChange={handleOnChangeInputs}
        />
        <label htmlFor='password'>Contraseña:</label>
        <input
          id='password'
          type={'password'}
          name='password'
          required={true}
          placeholder={'Your Password'}
          onChange={handleOnChangeInputs}
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
