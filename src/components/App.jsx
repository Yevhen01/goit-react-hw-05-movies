import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SharedLayout from './SharedLayout/SharedLayout';

const HomePageRen = lazy(() => import('../pages/HomePage'));
const MoviesPageRen = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsRen = lazy(() => import('../pages/MovieDetailsPage'));

export const App = () => {
  return (
    <>
      <SharedLayout />
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path="/" element={<HomePageRen />} />

          <Route path="movies" element={<MoviesPageRen />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsRen />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};
