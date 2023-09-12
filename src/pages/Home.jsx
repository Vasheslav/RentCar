import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Fast & Easy Way To Rent A Car</h1>
      <p className={css.text}>
        Rent cars is one of the best rentals car app to find the best renting
        car deals worldwide. Enjoy renting a car with no mileage limit and the
        one that best suits your needs so you can go wherever you want!
      </p>
    </div>
  );
};

export default Home;
