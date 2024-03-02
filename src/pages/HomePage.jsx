import { useState, useEffect } from "react";
import styled from "styled-components";

import MoviesList from "../components/MoviesList/MoviesList";
import { fetchTrendingMoovies } from "../service/apiService";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getFetchMoovies() {
      try {
        const data = await fetchTrendingMoovies();
        const { results } = data;
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    }
    getFetchMoovies();
  }, []);

  return (
    <>
      <Title>Trending Today</Title>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

const Title = styled.h2`
  color: #f28585;
  margin-left: 30px;
  font-size: 24px;
  font-weight: 700;
`;

export default HomePage;
