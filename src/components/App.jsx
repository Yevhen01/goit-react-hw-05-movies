// SETUP CODE SPLITTING BEHAVIOUR: Code Splitting (поділ коду) Додай асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи React.lazy() і Suspense.
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SharedLayout from "./SharedLayout/SharedLayout";

// SETUP CODE SPLITTING BEHAVIOUR: Code Splitting (поділ коду) Додай асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи React.lazy() і Suspense.
const HomePageRen = lazy(() => import("../pages/HomePage"));
const MoviesPageRen = lazy(() => import("../pages/MoviesPage"));
const MovieDetailsRen = lazy(() => import("../pages/MovieDetailsPage"));

// const CastPage = lazy(() => import('../pages/CastPage'));
// const ReviewsPage = lazy(() => import('../pages/ReviewsPage'));

export const App = () => {
  return (
    <>
      <SharedLayout />
      {/* SETUP CODE SPLITTING BEHAVIOUR: 
      Code Splitting (поділ коду)
      Додай асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи React.lazy() і Suspense.
      */}
      <Suspense fallback={<div>Loading..</div>}>
        {/* 
        Маршрути

        У застосунку повинні бути такі маршрути. Якщо користувач зайшов за неіснуючим маршрутом, його необхідно перенаправляти на домашню сторінку.

        '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів.
        '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом.
        '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм.
        /movies/:movieId/cast – компонент Cast, інформація про акторський склад. Рендериться на сторінці MovieDetails.
        /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails. */}
        <Routes>
          {/* SETUP ROUTE: '/' – компонент Home, домашня сторінка зі списком популярних кінофільмів. */}
          <Route path="/" element={<HomePageRen />} />
          {/* <Route index element={} /> */}

          {/* SETUP ROUTE: '/movies' – компонент Movies, сторінка пошуку кінофільмів за ключовим словом. */}
          <Route path="movies" element={<MoviesPageRen />} />

          {/* SETUP ROUTE: '/movies/:movieId' – компонент MovieDetails, сторінка з детальною інформацією про кінофільм. */}
          <Route path="/movies/:movieId/*" element={<MovieDetailsRen />} />

          {/* SETUP ROUTE: /movies/:movieId/reviews – компонент Reviews, інформація про огляди. Рендериться на сторінці MovieDetails. */}
          {/* <Route path="cast" element={<CastPage />} />
                <Route path="reviews" element={<ReviewsPage />} /> */}
          {/* </Route>
            </Route>
          </Route> */}
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};
