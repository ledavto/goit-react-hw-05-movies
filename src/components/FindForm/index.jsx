import api from 'api/api';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import React from 'react';

const FindForm = () => {
  const [listSearch, setListSearch] = useState([]);
  const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  // const page = searchParams.get('page');

  const location = useLocation();

  useEffect(() => {
    if (query)
      api.getSearch(query, page).then(data => {
        // console.log('Search ', data);
        setListSearch(prev => [...data.results]);
        setPage(prev => prev++);
        // setTotalPages(data.total_pages);
      });
  }, [query, page]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.searchInput.value });
    // console.log('value', e.target.searchInput.value);
  };

  return (
    <>
      <form className="searchForm" onSubmit={handleSubmit}>
        <button type="submit" className="searchForm-button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="searchForm-input"
          type="text"
          name="searchInput"
          // value={query ? query.toString() : ''}
          placeholder="Search films"
          // onChange={e => setSearchParams({ query: e.target.value })}
        />
      </form>
      <ul>
        {listSearch.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* {totalPages > page && (
        <Link to={`/movies?query=${query}&page=${page}`}>Load more</Link>
      )} */}
    </>
  );
};

export default FindForm;
