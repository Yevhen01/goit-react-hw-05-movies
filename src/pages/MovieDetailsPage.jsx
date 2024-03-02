import { Suspense, lazy } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import MovieDetails from "../components/MovieDetails/MovieDetails";

const CastPage = lazy(() => import("./CastPage"));
const ReviewsPage = lazy(() => import("./ReviewsPage"));

const MovieDetailsPage = () => {
  const location = useLocation();
  const { movieId } = useParams();

  const goBackPage = location.state?.from ?? "/";

  return (
    movieId && (
      <>
        <GoBack to={goBackPage}>Go back</GoBack>
        <MovieDetails />
        <AdditionalInfo>
          <h3>Additional information</h3>
          <AdditionalLink to="cast">Cast</AdditionalLink>
          <AdditionalLink to="reviews">Reviews</AdditionalLink>
        </AdditionalInfo>{" "}
        <Suspense fallback={<>Loading..</>}>
          <Routes>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Routes>
        </Suspense>
      </>
    )
  );
};

const GoBack = styled(Link)`
  color: #e1afd1;
  font-size: 20px;
  margin-left: 20px;
  transition: all 250ms ease;

  &:hover,
  &:focus {
    color: #ad88c6;
  }
`;

const AdditionalInfo = styled.div`
  padding: 20px;
  color: #ffe6e6;
`;

const AdditionalLink = styled(Link)`
  text-decoration: none;
  color: #ffe6e6;
  margin-right: 20px;
  font-size: 18px;
  font-weight: 500;
  border: 0.1px solid #ffe6e6;
  border-radius: 7px;
  padding: 10px 20px;
  transition: all 250ms ease;

  &.active {
    color: #ad88c6;
  }

  &:hover,
  &:focus {
    color: #ad88c6;
    border: 1px solid #ad88c6;
    background-color: #ffe6e6;
  }
`;

export default MovieDetailsPage;
