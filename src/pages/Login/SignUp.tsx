import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import { ServerBasicResponse } from '#/types';
import stylesModule from '../styles/Login.module.scss';

function SignUp() {
  // ------- HOOKS DECLARATIONS ------- //
  const RegisterInitData = { name: '', surname: '', email: '', password: '' };
  const [registerData, setRegisterData] = useState(RegisterInitData);

  // ------- HANDLE ACTION EVENTS ------- //
  const handleOnChangeInputs = (evento: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evento.target;

    setRegisterData({
      ...registerData,
      [name]: name !== 'email' ? value : value.toLowerCase(),
    });
  };

  const handleSubmit = async (evento: FormEvent) => {
    evento.preventDefault();

    try {
      const Register = { ...registerData, _id: uuidV4() };

      let headersList = {
        'Accept': '*/*',
        'Content-Type': 'application/json',
      };

      let bodyContent = JSON.stringify(Register);

      let response = await fetch('http://localhost:3000/api/user/register', {
        method: 'POST',
        body: bodyContent,
        headers: headersList,
      });

      let data: ServerBasicResponse = await response.json();

      if (data.Id === 201) {
        console.log(data);
      }
      alert(data.responseMessage);
    } catch (error) {
      console.log(error);
    }
  };

  // ------- RETURN COMPONENT ------- //
  return (
    <form className={`${stylesModule.LoginForm}`} onSubmit={handleSubmit}>
      <Helmet title='Sign Up' />
      <div className={`${stylesModule.LoginForm__Title}`}>
        <h3>Register</h3>
      </div>
      <div className={`${stylesModule.LoginForm__Data}`}>
        <label htmlFor='name'>First Name:</label>
        <input
          id='name'
          type={'text'}
          name='name'
          required={true}
          placeholder={'Your First Name...'}
          value={registerData.name}
          onChange={handleOnChangeInputs}
        />
        <label htmlFor='surname'>Last Name:</label>
        <input
          id='surname'
          type={'text'}
          name='surname'
          required={true}
          placeholder={'Your Last Name...'}
          value={registerData.surname}
          onChange={handleOnChangeInputs}
        />
        <label htmlFor='email'>Email:</label>
        <input
          id='email'
          type={'email'}
          name='email'
          required={true}
          pattern={'^[a-z]+[a-z0-9_-]+(?:.[a-z0-9_-]+)*@(?:omega.support.com)$'}
          placeholder={'example@omega.support.com'}
          value={registerData.email}
          onChange={handleOnChangeInputs}
        />
        <label htmlFor='password'>Contraseña:</label>
        <input
          id='password'
          type={'password'}
          name='password'
          required={true}
          placeholder={'Your Password'}
          value={registerData.password}
          onChange={handleOnChangeInputs}
        />
      </div>
      <div className={`${stylesModule.LoginForm__Submit}`}>
        <Link to={'/login/signin'}>Ya tienes cuenta? Inicia sesion aquí!</Link>
        <button>Sign Up</button>
      </div>
    </form>
  );
}

export default SignUp;
