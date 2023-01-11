import { ServerLoginResponse } from '#/types';
import { setCookie } from './AuthCookie';

export const FetchPostLogin = async (bodyJSON: LoginBodyJson) => {
  let headersList = {
    'Accept': '*/*',
    'Content-Type': 'application/json',
  };

  let bodyContent = JSON.stringify(bodyJSON);

  let response = await fetch(import.meta.env.VITE_URL + '/api/user/login', {
    method: 'POST',
    body: bodyContent,
    headers: headersList,
  });

  let data: ServerLoginResponse = await response.json();

  if (data.Id === 200) {
    console.log(data);
    setCookie('jwt', data.jwt, 1);
    return true;
  } else {
    alert(data.responseMessage);
    return false;
  }
};

// ------------------ Types ------------------ //

type LoginBodyJson = {
  email: string;
  password: string;
};
