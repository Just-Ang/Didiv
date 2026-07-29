import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from '../Footer/Footer';

const SharedLayout = ({ openLogin, openRegister })  => {
  return (
    <>
      <Header   openLogin={openLogin}
  openRegister={openRegister} />
       <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default SharedLayout;
