import Sidebar from 'components/sidebar';
import css from './Catalog.module.css';

const Catalog = () => {
  return (
    <div className={css.container}>
      <Sidebar />
    </div>
  );
};

export default Catalog;
