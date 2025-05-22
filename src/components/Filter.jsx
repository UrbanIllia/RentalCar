import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../store/slices/carsSlice";
import { fetchBrands } from "../services/api";
import css from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.cars);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetchBrands().then(setBrands);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
  };

  return (
    <div className={css.filter}>
      <select
        name="brand"
        value={filters.brand}
        onChange={handleFilterChange}
        className={css.checkBrand}
      >
        <option value="">Choose a brand</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
      <select
        name="rentalPrice"
        value={filters.rentalPrice}
        onChange={handleFilterChange}
        className={css.checkPrice}
      >
        <option value="">Choose a price</option>
        {[30, 40, 50, 60, 70].map((price) => (
          <option key={price} value={price}>
            {price}
          </option>
        ))}
      </select>
      <div className={css.iputWrap}>
        <input
          type="number"
          name="minMileage"
          value={filters.minMileage}
          onChange={handleFilterChange}
          placeholder="From"
          className={css.inputFrom}
        />
        <input
          type="number"
          name="maxMileage"
          value={filters.maxMileage}
          onChange={handleFilterChange}
          placeholder="To"
          className={css.inputTo}
        />
      </div>
      <button onClick={() => dispatch(setFilters({}))}>Search</button>
    </div>
  );
};

export default Filter;
