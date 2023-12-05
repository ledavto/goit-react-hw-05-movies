import { useEffect, useState } from 'react';
import api from 'api/api';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  // console.log('location', location);

  useEffect(() => {
    api.getTrend().then(data => {
      // console.log('data', data);
      setMovies(prev => [...data.results]);
    });
  }, []);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title ? movie.title : movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
