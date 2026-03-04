
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';


const SharedLayout = () => {
console.log('rer')
  return (
    <>
        <Header />
      <Outlet />
    </>
  );
};

export default SharedLayout;