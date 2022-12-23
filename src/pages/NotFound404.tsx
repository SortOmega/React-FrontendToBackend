import { Helmet } from 'react-helmet-async';

function NotFound404() {
  return (
    <>
      <Helmet title='Error 404' />

      <main>Page Not Found!</main>
    </>
  );
}

export default NotFound404;
