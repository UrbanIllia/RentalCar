import { SlLocationPin } from "react-icons/sl";
import css from "../../pages/CarDetails.module.css";

const CarLocation = ({ city, country, mileage, formatMileage }) => {
  return (
    <div className={css.rightSecondWrap}>
      <SlLocationPin size={16} style={{ marginRight: "4px" }} />
      <p className={css.casualText} style={{ marginRight: "16px" }}>
        {city}, {country}
      </p>
      <p className={css.casualText}>Mileage: {formatMileage(mileage)} Km</p>
    </div>
  );
};

export default CarLocation;
