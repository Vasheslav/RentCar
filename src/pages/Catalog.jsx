import Sidebar from 'components/sidebar';
import CarAvto from 'components/CartAvto';
import css from './Catalog.module.css';

const Catalog = () => {
  return (
    <div className={css.container}>
      <Sidebar />
      <CarAvto />
    </div>
  );
};

export default Catalog;
