import React, { useState } from 'react';
import CarItem from '../components/CarItem/CarItem';
import Error from '../components/Error/Error';
import css from './Favorites.module.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = item => {
    setFavorites([...favorites, item]);
  };

  return (
    <div className={css.container}>
      {favorites.length === 0 ? (
        <Error />
      ) : (
        favorites.map(item => (
          <CarItem
            key={item.id}
            year={item.year}
            make={item.make}
            model={item.model}
            type={item.type}
            img={item.img}
            description={item.description}
            fuelConsumption={item.fuelConsumption}
            engineSize={item.engineSize}
            accessories={item.accessories}
            functionalities={item.functionalities}
            rentalPrice={item.rentalPrice}
            rentalCompany={item.rentalCompany}
            address={item.address}
            rentalConditions={item.rentalConditions}
            mileage={item.mileage}
            addToFavorites={() => addToFavorites(item)}
          />
        ))
      )}
    </div>
  );
};

export default Favorites;
