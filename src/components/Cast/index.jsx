import api from 'api/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';

const Cast = () => {
  const { movieId } = useParams();
  const [infoCast, setInfoCast] = useState({});
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!movieId) return;
    api.getMovieCredits(movieId).then(data => {
      // console.log('cast ', data);
      setInfoCast(prev => [...data.cast]);
    });
  }, [movieId]);
  return (
    <div>
      <h5>Cast</h5>
      {infoCast.length > 0 && (
        <div>
          <ul>
            {infoCast.map(elem => (
              <div key={elem.id}>
                <li>{elem.character}</li>
                <img
                  src={
                    elem.profile_path
                      ? `https://image.tmdb.org/t/p/w500${elem.profile_path}`
                      : defaultImg
                  }
                  alt=""
                  width="100"
                />
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cast;
