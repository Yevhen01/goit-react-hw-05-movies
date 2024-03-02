import PropTypes from "prop-types";
import { MovieLink } from "./MovieItem.styled";

const MovieItem = ({ id, title }) => {
  return (
    <>
      <li>
        <MovieLink to={`/movies/${id}`}>
          <h3>{title}</h3>
        </MovieLink>
      </li>
    </>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
