import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import api from '../api/api';
import { useEffect, useState } from 'react';
import Reviews from 'components/Reviews';
import { Suspense } from 'react';
import Cast from 'components/Cast';
import React from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [infoMovie, setInfoMovie] = useState({});
  const [isLoader, setIsLoader] = useState(false);

  const location = useLocation();
  const backLink = location.state?.from ?? '/';

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    api.getMovieDetail(movieId).then(data => {
      console.log('data', data);
      setInfoMovie(prev => ({ ...data }));
      setIsLoader(true);
    });
  }, [movieId]);

  return (
    <>
      <Link to={backLink}>To back</Link>
      {isLoader && (
        <div className="card">
          <div className="card-body d-flex p-2">
            <img
              className="card-img-top"
              src={
                infoMovie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${infoMovie.backdrop_path}`
                  : defaultImg
              }
              alt="-"
              width={250}
            ></img>

            <div className="card-text">
              <h3 className="card-title">{infoMovie.title}</h3>
              <div>
                <b>Overview</b>
                <p>{infoMovie.overview}</p>
              </div>
              <div className="list-group list-group-flush">
                <h5 className="card-title">Genres</h5>
                <div className="list-group-item">
                  {infoMovie.genres &&
                    infoMovie.genres.map(genre => `${genre.name} `)}
                </div>
              </div>
            </div>
          </div>

          <div className="card-body">
            <ul>
              <li>
                <Link to="cast" element={<Cast />} state={{ from: location }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to="reviews"
                  element={<Reviews />}
                  state={{ from: location }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
