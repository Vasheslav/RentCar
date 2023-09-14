import { useState } from 'react';
import PropTypes from 'prop-types';
import ModalWindow from '../Modal/Modal';
import css from './CarItem.module.css';

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

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <p>{year}</p>
      <p>{model}</p>
      {showModal && (
        <ModalWindow onClose={toggleModal}>
          {/* <img src={largeImg} alt={tags} /> */}
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
