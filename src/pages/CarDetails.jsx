import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCars, setLoading } from "../store/slices/carsSlice";
import { fetchCarById } from "../services/api";
import BookingForm from "../components/BookingForm";
import css from "./CarDetails.module.css";

const CarDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { cars, loading } = useSelector((state) => state.cars);
  const [error, setError] = useState(null);

  // Шукаємо авто в стані Redux
  const car = cars.find((c) => c.id === id);

  useEffect(() => {
    // Якщо авто вже є в стані, не робимо запит
    if (car) return;

    const loadCar = async () => {
      try {
        dispatch(setLoading(true));
        const data = await fetchCarById(id);
        dispatch(setCars({ cars: [data], totalCars: 1, totalPages: 1 }));
      } catch (err) {
        setError("Failed to load car details. Please try again later.");
      } finally {
        dispatch(setLoading(false));
      }
    };

    loadCar();
  }, [dispatch, id, car]);

  if (loading) return <div className={css.loader}>Loading...</div>;
  if (error) return <div className={css.error}>{error}</div>;
  if (!car) return <div className={css.error}>Car not found.</div>;

  // Форматування пробігу
  const formatMileage = (mileage) => {
    return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div className={css.details}>
      <div className={css.left}>
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className={css.carImage}
        />
        <BookingForm carId={id} />
      </div>
      <div className={css.right}>
        <h2>{`${car.brand} ${car.model}, ${car.year}`}</h2>
        <p className={css.description}>{car.description}</p>
        <p>
          <strong>Rental Price:</strong> ${car.rentalPrice}
        </p>
        <p>
          <strong>Address:</strong> {car.address}
        </p>
        <p>
          <strong>Company:</strong> {car.rentalCompany}
        </p>
        <p>
          <strong>Type:</strong> {car.type}
        </p>
        <p>
          <strong>Mileage:</strong> {formatMileage(car.mileage)} km
        </p>
        <h3>Rental Conditions:</h3>
        <ul>
          {car.rentalConditions?.map((cond, i) => (
            <li key={i}>{cond}</li>
          ))}
        </ul>
        <h3>Car Specifications:</h3>
        <p>
          <strong>Fuel Consumption:</strong> {car.fuelConsumption} L/100km
        </p>
        <p>
          <strong>Engine Size:</strong> {car.engineSize}
        </p>
        <h3>Accessories and Functionalities:</h3>
        <ul>
          {car.accessories?.map((acc, i) => (
            <li key={i}>{acc}</li>
          ))}
          {car.functionalities?.map((func, i) => (
            <li key={i}>{func}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarDetails;
