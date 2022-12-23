export const setCookie = (
  CookieName: string,
  CookieValue: string,
  ExpireHours: number
) => {
  const d = new Date();
  d.setTime(d.getTime() + ExpireHours * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = CookieName + '=' + CookieValue + ';' + expires + ';path=/';
};
