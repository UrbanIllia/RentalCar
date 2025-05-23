import { Link } from "react-router-dom";
import css from "./NotFound.module.css";
import { BiSolidCarCrash } from "react-icons/bi";
import { LiaCarCrashSolid } from "react-icons/lia";

const NotFound = () => {
  return (
    <div className={css.container}>
      <LiaCarCrashSolid size={400} />

      <h1 className={css.title}>404</h1>
      <h2 className={css.subtitle}>Page Not Found</h2>
      <p className={css.text}>
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className={css.button}>
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
