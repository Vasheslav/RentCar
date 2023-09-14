import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import CarItem from '../CarItem/CarItem';
import { Button } from '../Button/Button';
import { Loader } from '../loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BASE_URL = 'https://650300cba0f2c1f3faeb4487.mockapi.io/catalog';
const notify = () => toast('Nothing found');
const messageError = () =>
  toast('An error occurred, please try again or enter a different value');

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const firstPage = 1;
    setPage(firstPage);
    setCars([]);

    setStatus('pending');

    axios
      .get(`${BASE_URL}?page=${firstPage}&per_page=8`)
      .then(res => {
        if (res.data.length === 0) {
          notify();
        }
        setCars(prevCars => [...prevCars, ...res.data]);
        setStatus('resolved');
        setShowButton(res.data.length >= 8);
      })
      .catch(error => messageError());
  }, []);

  const onChangePage = () => {
    let nextPage = page + 1;
    setPage(nextPage);
    axios
      .get(`${BASE_URL}?page=${nextPage}&per_page=8`)
      .then(res => {
        setCars(prevCars => [...prevCars, ...res.data]);
        setStatus('resolved');
        setShowButton(res.data.length >= 8);
      })
      .catch(error => messageError());
  };

  if (status === 'idle') {
    return null;
  }

  if (status === 'pending') {
    return <Loader />;
  }

  if (status === 'rejected') {
    return (
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    );
  }

  if (status === 'resolved') {
    return (
      <div>
        <ul>
          {cars.map(item => (
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
            />
          ))}
        </ul>
        {showButton && <Button onClick={onChangePage} />}
      </div>
    );
  }
};

export default CarList;
