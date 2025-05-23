import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCars, setLoading } from "../store/slices/carsSlice";
import { fetchCarById } from "../services/api";
import BookingForm from "../components/BookingForm";
import css from "./CarDetails.module.css";
import { SlLocationPin } from "react-icons/sl";
import { FaRegCircleCheck } from "react-icons/fa6";
import { BsCalendar2Week, BsCarFront, BsFuelPump } from "react-icons/bs";
import { PiGear } from "react-icons/pi";

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
          <BookingForm carId={id} />
        </div>
        {/* ................................................. */}
        <div className={css.right}>
          {/* ............................................... */}
          <div className={css.rightFirstWrap}>
            <h2>
              {car.brand} {car.model}, {car.year}{" "}
              <span className={css.casualText} style={{ color: "var(--gray)" }}>
                &nbsp;&nbsp;&nbsp;Id: {car.id.slice(0, 4)}
              </span>
            </h2>
          </div>
          {/* ............................................... */}
          <div className={css.rightSecondWrap}>
            <SlLocationPin size={16} style={{ marginRight: "4px" }} />
            <p className={css.casualText} style={{ marginRight: "16px" }}>
              {city}, {country}
            </p>
            <p className={css.casualText}>
              Milleage: {formatMileage(car.mileage)} Km
            </p>
          </div>
          {/* .................................................. */}
          <p className={css.price}>${car.rentalPrice}</p>
          {/* ................................................. */}
          <p className={css.casualText} style={{ marginBottom: "68px" }}>
            {car.description}
          </p>
          {/* .................................................... */}
          <div className={css.rightThirdWrap}>
            {/* .................................................. */}
            <div className={css.rightSubWrap}>
              <h3>Rental Conditions:</h3>
              <ul>
                {car.rentalConditions?.map((cond, i) => (
                  <li
                    key={i}
                    className={css.casualText}
                    style={{
                      marginBottom: "16px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <FaRegCircleCheck
                      size={16}
                      style={{ marginRight: "8px" }}
                    />
                    {cond}
                  </li>
                ))}
              </ul>
              {/* ................................................ */}
            </div>
            <div className={css.rightSubWrap}>
              <h3>Car Specifications:</h3>
              <ul>
                <li className={css.flexRow8}>
                  <BsCalendar2Week />
                  <p className={css.casualText}>Year: {car.year}</p>
                </li>
                <li className={css.flexRow8}>
                  <BsCarFront />
                  <p className={css.casualText}>Type: {car.type}</p>
                </li>
                <li className={css.flexRow8}>
                  <BsFuelPump />
                  <p className={css.casualText}>
                    Fuel Consumption: {car.fuelConsumption}
                  </p>
                </li>
                <li className={css.flexRow8}>
                  <PiGear />
                  <p className={css.casualText}>
                    Engine Size: {car.engineSize}
                  </p>
                </li>
              </ul>
            </div>
            {/* ....................................................... */}
            <div>
              <h3>Accessories and functionalities:</h3>
              {car.accessories?.map((acc, i) => (
                <li
                  key={i}
                  className={css.casualText}
                  style={{
                    marginBottom: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FaRegCircleCheck size={16} style={{ marginRight: "8px" }} />
                  {acc}
                </li>
              ))}
              {car.functionalities?.map((func, i) => (
                <li
                  key={i}
                  className={css.casualText}
                  style={{
                    marginBottom: "16px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FaRegCircleCheck size={16} style={{ marginRight: "8px" }} />
                  {func}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
