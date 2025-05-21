import { Link } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.hero}>
      <img src="hero-image.jpg" alt="Hero" className={css.heroImage} />{" "}
      {/* Додай зображення */}
      <h1 className={css.title}>Find your perfect rental car</h1>
      <p className={css.subtitle}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Link to="/catalog" className={css.button}>
        View Catalog
      </Link>
    </div>
  );
};

export default Home;
