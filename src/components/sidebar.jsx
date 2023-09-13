import css from './sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={css.container}>
      <form className={css.form}>
        <label className={css.label}>
          Car brand
          <input type="text" name="Car_brand" className={css.car_brend} />
        </label>
        <label className={css.label}>
          Price/ 1 hour
          <input type="text" name="Price" className={css.price} />
        </label>
        <label className={css.label}>
          Сar mileage / km
          <input type="text" name="From_mileage" className={css.mileage} />
          <input type="text" name="To_mileage" className={css.mileage} />
        </label>
        <input type="submit" value="Search" className={css.button} />
      </form>
    </div>
  );
};

export default Sidebar;
