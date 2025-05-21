import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFavorite } from "../store/slices/favoritesSlice";
import css from "./CarCard.module.css";

const CarCard = ({ car }) => {
  const dispatch = useDispatch();

  // Функція для форматування пробігу (додаємо пробіл кожні 3 цифри)
  const formatMileage = (mileage) => {
    return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  // Додаємо авто до обраних
  const handleAddToFavorites = () => {
    dispatch(addFavorite(car));
  };

  return (
    <div className={css.card}>
      <img
        src={car.img}
        alt={`${car.brand} ${car.model}`}
        className={css.carImage}
      />
      <div className={css.info}>
        <h3>{`${car.brand} ${car.model}, ${car.year}`}</h3>
        <p className={css.price}>${car.rentalPrice}</p>
        <p>{car.address}</p>
        <p>{car.rentalCompany}</p>
        <p>
          {car.type} | {formatMileage(car.mileage)} km
        </p>
      </div>
      <button onClick={handleAddToFavorites} className={css.favButton}>
        Add to Favorites
      </button>
      <Link to={`/catalog/${car.id}`} className={css.readMore}>
        Read more
      </Link>
    </div>
  );
};

export default CarCard;
