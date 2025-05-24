import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCars, setLoading } from "../store/slices/carsSlice";
import { fetchCarById } from "../services/api";
import BookingForm from "../components/BookingForm/BookingForm";
import CarHeader from "../components/CarHeader/CarHeader";
import CarLocation from "../components/CarLocation/CarLocation";
import CarDescription from "../components/CarDescription/CarDescription";
import CarListSection from "../components/CarListSection/CarListSection";
import CarSpecifications from "../components/CarSpecifications/CarSpecifications";
import css from "./CarDetails.module.css";

const CarDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { cars, loading } = useSelector((state) => state.cars);
  const [error, setError] = useState(null);

  const car = cars.find((c) => c.id === id);

  useEffect(() => {
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

  const formatMileage = (mileage) => {
    return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const fullAdress = car.address;
  const parts = fullAdress.split(",");
  const city = parts[1]?.trim();
  const country = parts[2]?.trim();

  return (
    <div className="container">
      <div className={css.details}>
        <div className={css.left}>
          <img
            src={car.img}
            alt={`${car.brand} ${car.model}`}
            className={css.carImage}
          />
          <BookingForm carId={id} car={car} />
        </div>
        <div className={css.right}>
          <CarHeader
            brand={car.brand}
            model={car.model}
            year={car.year}
            id={car.id}
          />
          <CarLocation
            city={city}
            country={country}
            mileage={car.mileage}
            formatMileage={formatMileage}
          />
          <CarDescription
            rentalPrice={car.rentalPrice}
            description={car.description}
          />
          <div className={css.rightThirdWrap}>
            <div className={css.rightSubWrap}>
              <CarListSection
                title="Rental Conditions:"
                items={car.rentalConditions}
              />
            </div>
            <CarSpecifications
              year={car.year}
              type={car.type}
              fuelConsumption={car.fuelConsumption}
              engineSize={car.engineSize}
            />
            <CarListSection
              title="Accessories and functionalities:"
              items={[
                ...(car.accessories || []),
                ...(car.functionalities || []),
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
