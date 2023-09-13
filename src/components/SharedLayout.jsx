import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  return (
    <div className={css.container}>
      <div>
        <nav className={css.header}>
          <NavLink to="/" className={css.logo}>
            Rent Car
          </NavLink>
          <div className={css.nav}>
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
