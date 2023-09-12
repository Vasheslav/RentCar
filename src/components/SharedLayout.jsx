import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.header}>
      <div>
        <nav>
          <NavLink to="/" className={css.logo}>
            Rent Car
          </NavLink>
          <div className={css.container}>
            <NavLink to="/" className={css.nav}>
              Home
            </NavLink>
            <NavLink to="/catalog" className={css.nav}>
              Catalog
            </NavLink>
            <NavLink to="/favorites" className={css.nav}>
              Favorites
            </NavLink>
          </div>
        </nav>
      </div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
