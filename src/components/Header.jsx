import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";
// import logo from "../assets/logo.png"; // Додай логотип

const Header = () => {
  return (
    <header className={clsx("container", css.header)}>
      <NavLink to="/" className={css.logo}>
        {/* <img src={} alt="RentalCar Logo" width="100" /> */}
        <p>RentalCar</p>
      </NavLink>
      <nav className={css.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? css.active : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? css.active : "")}
        >
          Catalog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
