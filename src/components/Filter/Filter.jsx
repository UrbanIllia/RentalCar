import { useState, useEffect, useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../store/slices/carsSlice";
import { fetchBrands } from "../../services/api";
import css from "./Filter.module.css";
import SelectFilter from "../SelectFilter/SelectFilter";
import RangeFilter from "../RangeFilter/RangeFilter";

const Filter = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.cars);
  const [brands, setBrands] = useState([]);
  const [localFilters, setLocalFilters] = useState({ ...filters });
  const brandId = useId();
  const priceId = useId();
  const kmId = useId();

  useEffect(() => {
    fetchBrands().then(setBrands);
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    dispatch(setFilters(localFilters));
  };

  return (
    <div className={css.filter}>
      <SelectFilter
        label="Car brand"
        name="brand"
        value={localFilters.brand}
        options={brands}
        onChange={handleFilterChange}
        id={brandId}
      />
      <SelectFilter
        label="Price/ 1 hour"
        name="rentalPrice"
        value={localFilters.rentalPrice}
        options={[30, 40, 50, 60, 70, 80, 90, 100]}
        onChange={handleFilterChange}
        id={priceId}
      />
      <RangeFilter
        label="Сar mileage / km"
        minName="minMileage"
        maxName="maxMileage"
        minValue={localFilters.minMileage}
        maxValue={localFilters.maxMileage}
        onChange={handleFilterChange}
        id={kmId}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Filter;
