import { Link } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.wrap}>
      <div className={css.hero}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.subtitle}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Link to="/catalo" className={css.button}>
          View Catalog
        </Link>
      </div>
    </div>
  );
};

export default Home;
