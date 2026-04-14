import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default SharedLayout;
