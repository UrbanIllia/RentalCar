import sprite from "../assets/sprite.svg";
import css from "./Divider.module.css";

const Divider = () => {
  return (
    <svg width="4" height="32" aria-hidden="true">
      <use href={`${sprite}#icon-Divider`} />
    </svg>
  );
};

export default Divider;
