import { useState } from 'react';
import PropTypes from 'prop-types';
import ModalWindow from '../Modal/Modal';
import css from './CarItem.module.css';
import closeIcon from '../../img/x.svg';
import heart from '../../img/heart.svg';

const CarItem = ({
  year,
  make,
  model,
  type,
  img,
  description,
  fuelConsumption,
  engineSize,
  accessories,
  functionalities,
  rentalPrice,
  rentalCompany,
  address,
  rentalConditions,
  mileage,
}) => {
  const [showModal, setShowModal] = useState(false);

  const parts = address.split(', ');

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className={css.container}>
        <img
          src={heart}
          alt="heart"
          className={css.heart}
          onClick={addToFavorites}
        />
        <img src={img} alt="avto" className={css.img} />
        <div className={css.tittle_box}>
          <h1 className={css.title}>
            {make}&nbsp;
            {model}, {year}
          </h1>
          <h1 className={css.title}>{rentalPrice}</h1>
        </div>
        <ul className={css.list}>
          <li className={`${css.text} ${css.text_line}`}>
            {parts[parts.length - 2]}
          </li>
          <li className={`${css.text} ${css.text_line}`}>
            {parts[parts.length - 1]}
          </li>
          <li className={`${css.text} ${css.text_line}`}>{rentalCompany}</li>
          <li className={`${css.text} ${css.text_line}`}>{type}</li>
          <li className={css.text}>{mileage}</li>
        </ul>
        <button type="button" className={css.button} onClick={toggleModal}>
          Learn more
        </button>
      </div>
      {showModal && (
        <ModalWindow onClose={toggleModal}>
          <div className={css.modal_box}>
            <img
              src={closeIcon}
              alt="close"
              className={css.icon}
              onClick={toggleModal}
            />
            <img src={img} alt="avto" />
            <h1 className={css.title}>
              {make}&nbsp;
              {model}, {year}
            </h1>
          </div>
        </ModalWindow>
      )}
    </div>
  );
};

// CarItem.propTypes = {
//   year: PropTypes.number.isRequired,
//   make: PropTypes.string.isRequired,
//   model: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   fuelConsumption: PropTypes.string.isRequired,
//   engineSize: PropTypes.string.isRequired,
//   accessories: PropTypes.array.isRequired,
//   functionalities: PropTypes.array.isRequired,
//   rentalPrice: PropTypes.string.isRequired,
//   rentalCompany: PropTypes.string.isRequired,
//   address: PropTypes.string.isRequired,
//   rentalConditions: PropTypes.string.isRequired,
//   mileage: PropTypes.number.isRequired,
// };

export default CarItem;
