import PropTypes from "prop-types";
import MovieItem from "./MovieItem/MovieItem";
import { List } from "./MovieList.styled";

const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, original_title }) => {
        return <MovieItem key={id} title={original_title} id={id} />;
      })}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
