import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import CatalogPage from 'pages/CatalogPage/CatalogPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import { Suspense } from 'react';
import { Loader } from './components/Loader/Loader';
import { GlobalStyle } from './styles/GlobalStyled';
import HomePage from './pages/HomePage/HomePage';
import { CategoryPage } from './pages/CategoryPage/CategoryPage';
import { ProductPage } from './pages/ProductPage/ProductPage';
import CartPage from './pages/CartPage/CartPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import { DeliveryPage } from './pages/DeliveryPage/DeliveryPage';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';
import OrderConfirmation from './pages/OrderConfirmation/OrderConfirmation';
import AboutUs from './pages/About/About';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import { NewProductsPage } from './pages/NewProductsPage/NewProductsPage';
import SalePage from './pages/SalePage/SalePage';



function App() {

  return (
     
    <AppWrapper>
        <GlobalStyle />
        <ScrollToTop />
       <Suspense fallback={<Loader />}>
      <Routes>
  <Route path="/" element={<SharedLayout />}>
    <Route index element={<HomePage />} />
    <Route path="catalog" element={<CatalogPage />} />
     
    <Route path="/catalog/:category" element={<CategoryPage />} />
    <Route path="/product/:id" element={<ProductPage />} />
    <Route path="cart" element={<CartPage />} />
    <Route path="favorite" element={<FavoritesPage/>} />
    <Route path ="/catalog/new" element={<NewProductsPage/>} />
     <Route path ="/catalog/sale" element={<SalePage/>} />

 <Route path="checkout" element={<CheckoutPage/>} />
  <Route path="/order-confirmation" element={<OrderConfirmation />} />
    <Route path="about" element={<AboutUs/>} /> 
    <Route path="contacts" element={<ContactsPage/>} />
    <Route path="delivery" element={<DeliveryPage/>}/>
    <Route path="*" element={<ErrorPage />} />
  </Route>
</Routes>
      </Suspense>
    </AppWrapper>
  );
}
export default App;
