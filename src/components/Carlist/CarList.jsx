import { useState, useEffect } from 'react';
import axios from 'axios';
import { useMemo } from 'react';
import PropTypes from 'prop-types';
import CarItem from '../CarItem/CarItem';
import Button from '../Button/Button';
import { Loader } from '../loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './CarList.module.css';

const BASE_URL = 'https://650300cba0f2c1f3faeb4487.mockapi.io/catalog';
const notify = () => toast('Nothing found');
const messageError = () =>
  toast('An error occurred, please try again or enter a different value');

const CarList = () => {
  const [allCars, setAllCars] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [status, setStatus] = useState('idle');
  const [showButton, setShowButton] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setStatus('pending');

    axios
      .get(BASE_URL)
      .then(res => {
        if (res.data.length === 0) {
          notify();
        }
        setAllCars(res.data);
        const initialPageData = res.data.slice(0, itemsPerPage);
        setPaginatedData(initialPageData);
        setStatus('resolved');
        setShowButton(res.data.length >= itemsPerPage);
      })
      .catch(error => messageError());
  }, []);

  const itemsPerPage = 8;

  const onChangePage = () => {
    const nextPage = currentPage + 1;
    const startIndex = (nextPage - 1) * itemsPerPage;
    const endIndex = nextPage * itemsPerPage;

    if (endIndex >= allCars.length) {
      setShowButton(false);
    }

    const newPaginatedData = allCars.slice(startIndex, endIndex);
    setPaginatedData([...paginatedData, ...newPaginatedData]);
    setCurrentPage(nextPage);
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
      <div className={css.container}>
        <ul className={css.list}>
          {paginatedData.map(item => (
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
