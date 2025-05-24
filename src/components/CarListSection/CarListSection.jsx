import { FaRegCircleCheck } from "react-icons/fa6";
import css from "../../pages/CarDetails.module.css";

const CarListSection = ({ title, items }) => {
  return (
    <div>
      <h3>{title}</h3>
      {items?.map((item, i) => (
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
          {item}
        </li>
      ))}
    </div>
  );
};

export default CarListSection;
