import { Link } from "react-router-dom";
import { parseAddress } from "../utils/addressUtils";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/slices/favoritesSlice";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import css from "./CarCard.module.css";

const CarCard = ({ car }) => {
  const { city, country } = parseAddress(car.address);
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);

  const isFavorite = favorites.some((favCar) => favCar.id === car.id);

  const formatMileage = (mileage) => {
    return mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car.id));
    } else {
      dispatch(addFavorite(car));
    }
  };

  return (
    <div className={css.card}>
      <img
        src={car.img}
        alt={`${car.brand} ${car.model}`}
        className={css.carImage}
      />
      <div className={css.info}>
        <div className={css.infoMainWrap}>
          <h3 className={css.infoTitle}>
            {car.brand} <span className={css.span}>{car.model}</span>,{" "}
            {car.year}
          </h3>
          <p className={css.price}>${car.rentalPrice}</p>
        </div>
        <div className={css.infoAdress}>
          <p className={css.infoAdressCity}>{city}</p>
          <p className={css.infoAdressCountry}>{country}</p>
          <p className={css.infoAdressCompany}> {car.rentalCompany}</p>
        </div>
        <div className={css.infoAdress2}>
          <p className={css.infoAdressType}>{car.type}</p>
          <p className={css.infoAdressKm}>{formatMileage(car.mileage)} km</p>
        </div>
      </div>
      <button onClick={handleFavoriteToggle} className={css.favButton}>
        {isFavorite ? (
          <IoHeartSharp className={css.iconFull} size={20} color="#3470ff" />
        ) : (
          <IoHeartOutline className={css.iconEmpty} size={20} color="white" />
        )}
      </button>
      <Link to={`/catalog/${car.id}`} className={css.readMore}>
        Read more
      </Link>
    </div>
  );
};

export default CarCard;
