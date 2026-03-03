import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import FirstPage from 'pages/FirstPage/FirstPage';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import { Suspense } from 'react';
import { Loader } from './components/Loader/Loader';
import { GlobalStyle } from './styles/GlobalStyled';


const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
     
    <AppWrapper>
        <GlobalStyle />
       <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/first" element={<FirstPage />} />
          <Route path="/catalog" element={<CatalogPage />}>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      </Suspense>
    </AppWrapper>
  );
}
export default App;
