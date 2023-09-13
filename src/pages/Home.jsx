import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const navigate = useNavigate();

  const handleSignInPage = async () => {
    React.startTransition(() => {
      navigate('/catalog');
    });
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Fast & Easy Way To Rent A Car</h1>
      <p className={css.text}>
        Rent cars is one of the best rentals car app to find the best renting
        car deals worldwide. Enjoy renting a car with no mileage limit and the
        one that best suits your needs so you can go wherever you want!
      </p>
      <button className={css.button} type="button" onClick={handleSignInPage}>
        Forward to the car search
      </button>
    </div>
  );
};

export default Home;
