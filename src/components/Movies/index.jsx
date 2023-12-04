import FindForm from 'components/FindForm';
import React from 'react';
// import { useNavigate, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  // const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="searchbar">
      <FindForm />
    </div>
  );
};

// export default Movies;
