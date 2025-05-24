import css from "../../pages/CarDetails.module.css";

const CarDescription = ({ rentalPrice, description }) => {
  return (
    <>
      <p className={css.price}>${rentalPrice}</p>
      <p className={css.casualText} style={{ marginBottom: "68px" }}>
        {description}
      </p>
    </>
  );
};

export default CarDescription;
