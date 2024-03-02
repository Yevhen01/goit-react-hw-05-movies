import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Reviews from "../components/MovieDetails/Reviews/Reviews";
import { fetchReviewById } from "../service/apiService";

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    const getCastInfo = async (id) => {
      try {
        const data = await fetchReviewById(id);
        const result = data.results.map(({ id, author, content }) => ({
          id,
          author,
          content,
        }));
        if (!result.length) {
          throw new Error("");
        }
        setReviews(result);
      } catch (error) {
        toast.error("No reviews found");
      }
    };
    getCastInfo(movieId);
  }, [movieId]);
  if (Object.keys(reviews).length > 0)
    return (
      <>
        <Reviews reviews={reviews} />
      </>
    );
};

export default ReviewsPage;
