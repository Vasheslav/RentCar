import car from '../../img/car.jpg';
import css from './Error.module.css';

const Error = () => {
  return (
    <div className={css.container}>
      <img src={car} alt="avto" />
      <h1>You dont have favorite cars!</h1>
    </div>
  );
};

export default Error;
