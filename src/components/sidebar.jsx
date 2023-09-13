import css from './sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={css.container}>
      <form className={css.form}>
        <label className={css.label}>
          Car brand
          <input
            type="text"
            name="Car_brand"
            placeholder="Enter the text"
            className={css.car_brend}
          />
        </label>
        <label className={css.label}>
          Price/ 1 hour
          <input
            type="text"
            name="Price"
            placeholder="To $"
            className={css.price}
          />
        </label>
        <label className={css.label}>
          Сar mileage / km
          <div className={css.box}>
            <input
              type="text"
              name="From_mileage"
              placeholder=""
              className={css.mileage1}
            />
            <input
              type="text"
              name="To_mileage"
              placeholder=""
              className={css.mileage2}
            />
          </div>
        </label>
        <input type="submit" value="Search" className={css.button} />
      </form>
    </div>
  );
};

export default Sidebar;
