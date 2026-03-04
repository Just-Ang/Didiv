
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from '../Footer/Footer';


const SharedLayout = () => {
console.log('rer')
  return (
    <>
        <Header />
      <Outlet />
        <Footer />
    </>
  );
};

export default SharedLayout;