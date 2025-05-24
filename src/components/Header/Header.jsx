import { NavLink } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.wrap}>
          <NavLink to="/" className={css.logo}>
            <svg className={css.iconLogo} width="24" height="24">
              <use href={`${sprite}#icon-RentalCar`}></use>
            </svg>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
