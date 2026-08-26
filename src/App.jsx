import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import CatalogPage from 'pages/CatalogPage/CatalogPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import { Suspense, useEffect, useState } from 'react';
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
import { AuthModal } from './components/AuthModal/AuthModal';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { AccountPage } from './pages/AccountPage/AccountPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { useDispatch, useSelector } from 'react-redux';
import { setFavorites } from './redux/favoritesSlice';
import { OrderPage } from './components/OrderPage/OrderPage';

function App() {
  const dispatch = useDispatch();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const isLoggedIn = !!localStorage.getItem('token');

  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || 'null');
  const userDocumentId = user?.documentId;

  //   const token = localStorage.getItem("token");
  const localFavorites = useSelector((state) => state.favorites.items);
  const localCartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    if (!token || !userDocumentId) return;
    const loadFavorites = async () => {
      const token = localStorage.getItem('token');

      if (!token) return;

      const res = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/api/favorites?filters[user][documentId][$eq]=${userDocumentId}&populate=product.images`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      const favorites = data.data.map((item) => ({
        ...item.product,
        favoriteId: item.id,
        favoriteDocumentId: item.documentId,
      }));

      dispatch(setFavorites(favorites));
    };

    loadFavorites();
  }, [userDocumentId, dispatch, token]);

  return (
    <AppWrapper>
      <GlobalStyle />
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <SharedLayout
                openLogin={() => {
                  setAuthMode('login');
                  setIsAuthOpen(true);
                }}
                openRegister={() => {
                  setAuthMode('register');
                  setIsAuthOpen(true);
                }}
              />
            }
          >
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />

            <Route path="/catalog/:category" element={<CategoryPage />} />
            <Route path="/product/:identifier" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="favorite" element={<FavoritesPage />} />
            <Route path="/catalog/new" element={<NewProductsPage />} />
            <Route path="/catalog/sale" element={<SalePage />} />

            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="delivery" element={<DeliveryPage />} />

            <Route
              path="account"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <AccountPage />
                </ProtectedRoute>
              }
            >
              <Route index element={<ProfilePage />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="orders" element={<OrderPage /> }/>
 {/* <Route path="favorites" element={<FavoritesAccountPage />} />
   <Route path="password" element={<ChangePasswordPage />} />  */}
            </Route>

            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
        <AuthModal
          localFavorites={localFavorites}
          localCartItems={localCartItems}
          isOpen={isAuthOpen}
          mode={authMode}
          onClose={() => setIsAuthOpen(false)}
          setMode={setAuthMode}
        />
      </Suspense>
    </AppWrapper>
  );
}
export default App;
