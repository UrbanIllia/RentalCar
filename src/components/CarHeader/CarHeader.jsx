import css from "../../pages/CarDetails.module.css";

const CarHeader = ({ brand, model, year, id }) => {
  return (
    <div className={css.rightFirstWrap}>
      <h2>
        {brand} {model}, {year}{" "}
        <span className={css.casualText} style={{ color: "var(--gray)" }}>
          Id: {id.slice(0, 4)}
        </span>
      </h2>
    </div>
  );
};

export default CarHeader;
