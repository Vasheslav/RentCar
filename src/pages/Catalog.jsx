import Sidebar from 'components/SideBar/sidebar';
import CarList from '../components/Carlist/CarList';
import css from './Catalog.module.css';

const Catalog = () => {
  return (
    <div className={css.container}>
      <Sidebar />
      <CarList />
    </div>
  );
};

export default Catalog;
