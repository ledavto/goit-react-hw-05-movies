import { FindForm } from 'components/FindForm';
import React from 'react';
// import { useNavigate, useSearchParams } from 'react-router-dom';

const Movies = ({ onSubmit }) => {
  // const [searchParams, setSearchParams] = useSearchParams();

  return (
    <header className="searchbar">
      <FindForm />
    </header>
  );
};

export default Movies;
