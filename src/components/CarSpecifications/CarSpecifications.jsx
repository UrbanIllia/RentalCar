import { BsCalendar2Week, BsCarFront, BsFuelPump } from "react-icons/bs";
import { PiGear } from "react-icons/pi";
import css from "../../pages/CarDetails.module.css";

const CarSpecifications = ({ year, type, fuelConsumption, engineSize }) => {
  return (
    <div className={css.rightSubWrap}>
      <h3>Car Specifications:</h3>
      <ul>
        <li className={css.flexRow8}>
          <BsCalendar2Week />
          <p className={css.casualText}>Year: {year}</p>
        </li>
        <li className={css.flexRow8}>
          <BsCarFront />
          <p className={css.casualText}>Type: {type}</p>
        </li>
        <li className={css.flexRow8}>
          <BsFuelPump />
          <p className={css.casualText}>Fuel Consumption: {fuelConsumption}</p>
        </li>
        <li className={css.flexRow8}>
          <PiGear />
          <p className={css.casualText}>Engine Size: {engineSize}</p>
        </li>
      </ul>
    </div>
  );
};

export default CarSpecifications;
