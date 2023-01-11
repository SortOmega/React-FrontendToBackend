// ------------- SET A NEW COOKIE TO THE PAGE ------------- //
export const setCookie = (
  CookieName: string,
  CookieValue: string,
  ExpireHours: number
) => {
  try {
    const d = new Date();
    d.setTime(d.getTime() + ExpireHours * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie =
      CookieName + '=' + CookieValue + ';' + expires + ';path=/';
  } catch (error) {
    console.log(error);
  }
};

// ------------- RETURNS A LIST OF COOKIE DEFINED IN THE CURRENT PAGE ------------- //
export const getCookies = () => {
  if (document.cookie === '') return undefined;
  const Cookies = document.cookie.split(';');
  const CookiesArray = Cookies.map((cookie) => {
    const [name, value] = cookie.split('=');
    return [name.trim(), value.trimEnd()];
  });
  return CookiesArray;
};

// ------------- RETURNS THE VALUE OF THE SPECIFIED COOKIE NAME DEFINED IN THE CURRENT PAGE ------------- //
export const getCookie = (name: string) => {
  const Cookies = getCookies();
  if (!!!Cookies) return undefined;
  for (let i = 0; i < Cookies.length; i++) {
    if (Cookies[i][0] === name) {
      return Cookies[i][1];
    }
  }
  return undefined;
};
