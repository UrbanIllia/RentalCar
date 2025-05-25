import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCars, setLoading, setPage } from "../store/slices/carsSlice";
import { fetchCars } from "../services/api";
import Filter from "../components/Filter/Filter";
import CarCard from "../components/CarCard/CarCard";
import css from "./Catalog.module.css";

const Catalog = () => {
  const dispatch = useDispatch();
  const { cars, totalPages, page, filters, loading } = useSelector(
    (state) => state.cars
  );

  useEffect(() => {
    dispatch(setLoading(true));
    fetchCars({ ...filters, page, limit: 12 })
      .then((data) => {
        dispatch(setCars(data)); // Загружаем данные
      })
      .finally(() => dispatch(setLoading(false)));
  }, [dispatch, filters, page]);

  const handleLoadMore = () => {
    dispatch(setPage(page + 1));
  };

  return (
    <div className="container">
      <div className={css.catalog}>
        <Filter />
        {loading && cars.length === 0 ? (
          <div className={css.loading}>Loading...</div>
        ) : (
          <>
            <div className={css.cardGrid}>
              {cars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
            {page < totalPages && (
              <button onClick={handleLoadMore} className={css.loadMore}>
                Load More
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Catalog;
