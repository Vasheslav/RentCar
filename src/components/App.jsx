import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import Home from '../pages/Home';
// const Home = lazy(() => import('../pages/Home'));
const Catalog = lazy(() => import('../pages/Catalog'));
const Favorites = lazy(() => import('../pages/Favorites'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
};
