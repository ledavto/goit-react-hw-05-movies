import api from 'api/api';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [infoReviews, setInfoReviews] = useState({});

  useEffect(() => {
    if (!movieId) return;
    api.getMovieReviews(movieId).then(data => {
      // console.log('reviews', data.results);
      setInfoReviews(prev => [...data.results]);
    });
  }, [movieId]);
  return (
    <div>
      <h5> Reviews</h5>
      {infoReviews.length > 0 ? (
        <div>
          <ul>
            {infoReviews.map(review => (
              <li key={review.id}>
                <b>Author: </b>
                {review.author}
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No Reviews</div>
      )}
    </div>
  );
};

export default Reviews;
