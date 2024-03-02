import { useSearchParams } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import styled from "styled-components";

import { fetchMoviesBySearch } from "../service/apiService";
import MoviesList from "../components/MoviesList/MoviesList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searhParams, setSearchParams] = useSearchParams();
  const query = searhParams.get("query") ?? "";

  useEffect(() => {
    const getFetchMovies = async (searchQuery) => {
      try {
        const data = await fetchMoviesBySearch(searchQuery);
        if (!data.results.length) {
          throw new Error("No results found");
        }
        setMovies(data.results);
      } catch (error) {
        console.log(error);
        toast.error("No results found", { duration: 3000 });
      }
    };
    if (query === "") {
      return;
    }
    getFetchMovies(query);
  }, [query]);

  return (
    <>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={({ query }, { resetForm }) => {
          setSearchParams({ query });
          resetForm();
        }}
      >
        <SearchForm>
          <Input name="query" type="text" placeholder="Search movies" />
          <SearchBtn type="submit">Search</SearchBtn>
        </SearchForm>
      </Formik>
      {Object.keys(movies).length > 0 && <MoviesList movies={movies} />}
    </>
  );
};
const SearchForm = styled(Form)`
  display: flex;
  margin-top: 20px;
`;

const Input = styled(Field)`
  background-color: #ad88c6;
  color: #ffe6e6;
  font-weight: 700;
  font-size: 18px;
  border: none;
  outline: none;
  margin-left: 10px;
  padding: 10px;
  border-radius: 8px;
`;

const SearchBtn = styled.button`
  padding: 10px 20px;
  background-color: #ad88c6;
  color: #ffe6e6;
  font-weight: 700;
  font-size: 18px;
  border: none;
  outline: none;
  margin-left: 10px;
  cursor: pointer;
  transition: all 250ms ease;
  border-radius: 8px;

  &:hover,
  &:focus {
    background-color: #ffe6e6;
    color: #ad88c6;
  }
`;

export default MoviesPage;
