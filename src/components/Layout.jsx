import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import React from 'react';

export const Layout = () => {
  return (
    <div>
      <header className="nav nav-pills nav-fill">
        <NavLink className="nav-item nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-item nav-link" to="/movies">
          Movies
        </NavLink>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </div>
  );
};
