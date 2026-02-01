// import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';

// import { selectIsLoggedIn } from '../../redux/auth/selectors';

const SharedLayout = () => {

  return (
    <>
        <Header />
      <Outlet />
    </>
  );
};

export default SharedLayout;