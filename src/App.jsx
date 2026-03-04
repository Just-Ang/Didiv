import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import CatalogPage from 'pages/CatalogPage/CatalogPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import { Suspense } from 'react';
import { Loader } from './components/Loader/Loader';
import { GlobalStyle } from './styles/GlobalStyled';
import HomePage from './pages/HomePage/HomePage';


const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
     
    <AppWrapper>
        <GlobalStyle />
       <Suspense fallback={<Loader />}>
      <Routes>
  <Route path="/" element={<SharedLayout />}>
    <Route index element={<HomePage />} /> {/* Головна */}
    <Route path="catalog" element={<CatalogPage />} />
    <Route path="about" element={<div>Про нас</div>} /> 
    <Route path="contacts" element={<div>Контакти</div>} />
    <Route path="*" element={<ErrorPage />} />
  </Route>
</Routes>
      </Suspense>
    </AppWrapper>
  );
}
export default App;
