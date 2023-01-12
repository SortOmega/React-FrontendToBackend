import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
  HomePage,
  About,
  UsersPage,
  UserProfile,
  NotFound404,
  SignIn,
  SignUp,
  Dashboard,
  MyProfile,
  DashboardMain,
} from '#/pages/AllPages';
import { NavMenu } from '#Components/AllComponents';
import { useContext } from 'react';
import { GlobalContext } from '#/assets/Contexts/GlobalContext';

function App() {
  const { theme } = useContext(GlobalContext);
  return (
    <BrowserRouter>
      {/*Generates the Navigator bar*/}
      <NavMenu />
      {/*Navigation Routes*/}
      <main className={theme.get}>
        <Routes>
          {/* ********** HOME ********** */}
          <Route path='/' element={<HomePage />} />
          {/* ********** ABOUT ********** */}
          <Route path='/about/*' element={<About />}>
            <Route path='company' element={<span>Info de la compañia</span>} />
            <Route path='me' element={<span>Info sobre mi</span>} />
            <Route
              path='services'
              element={<span>Info sobre nuestros servicios</span>}
            />
          </Route>
          {/* ********** LOGIN ********** */}
          <Route path='/login/signin' element={<SignIn />} />
          <Route path='/login/signup' element={<SignUp />} />
          <Route
            path='/login'
            element={<Navigate to={'/login/signin'} replace={true} />}
          />
          {/* ********** DASHBOARD ********** */}
          <Route path='/dashboard/*' element={<Dashboard />}>
            <Route path='main' element={<DashboardMain />} />
            <Route path='myprofile' element={<MyProfile />} />
            <Route path='users' element={<UsersPage />}>
              <Route path=':userID' element={<UserProfile />} />
            </Route>
          </Route>
          <Route
            path='/dashboard'
            element={<Navigate to={'/dashboard/main'} />}
          />

          {/* ********** NOT VALID ********** */}
          <Route path='*' element={<NotFound404 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
