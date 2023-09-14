import icon from '../../img/icon.svg';
import css from './sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={css.container}>
      <form className={css.form}>
        <label>
          <span className={css.label}>Car brand</span>
          <div className={css.box_icon}>
            <input
              type="text"
              name="Car_brand"
              placeholder="Enter the text"
              className={css.car_brend}
            />
            <img src={icon} alt="Car brand icon" className={css.icon} />
          </div>
        </label>
        <label>
          <span className={css.label}>Price/ 1 hour</span>
          <div className={css.box_icon}>
            <input
              type="text"
              name="Price"
              placeholder="To $"
              className={css.price}
            />
            <img src={icon} alt="Car brand icon" className={css.icon} />
          </div>
        </label>
        <label>
          <span className={css.label}>Сar mileage / km</span>
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
