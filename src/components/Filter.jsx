import { useState, useEffect, useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../store/slices/carsSlice";
import { fetchBrands } from "../services/api";
import css from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.cars);
  const [brands, setBrands] = useState([]);
  const brandId = useId();
  const priceId = useId();
  const kmId = useId();

  useEffect(() => {
    fetchBrands().then(setBrands);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
  };

  return (
    <div className={css.filter}>
      <div className={css.labelWrap}>
        <label htmlFor={brandId} className={css.label}>
          Car brand
        </label>
        <select
          name="brand"
          value={filters.brand}
          onChange={handleFilterChange}
          className={css.checkBrand}
          id={brandId}
        >
          <option value="">Choose a brand</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className={css.labelWrap}>
        <label htmlFor={priceId} className={css.label}>
          Price/ 1 hour
        </label>
        <select
          name="rentalPrice"
          value={filters.rentalPrice}
          onChange={handleFilterChange}
          className={css.checkPrice}
          id={priceId}
        >
          <option value="">Choose a price</option>
          {[30, 40, 50, 60, 70].map((price) => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>
      <div className={css.labelWrap}>
        <label htmlFor={kmId} className={css.label}>
          Сar mileage / km
        </label>
        <div className={css.iputWrap}>
          <input
            type="number"
            name="minMileage"
            value={filters.minMileage}
            onChange={handleFilterChange}
            placeholder="From"
            className={css.inputFrom}
            id={kmId}
          />
          <input
            type="number"
            name="maxMileage"
            value={filters.maxMileage}
            onChange={handleFilterChange}
            placeholder="To"
            className={css.inputTo}
            id={kmId}
          />
          <button onClick={() => dispatch(setFilters({}))}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
