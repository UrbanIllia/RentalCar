import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    totalCars: 0,
    page: 1,
    totalPages: 1,
    filters: { brand: "", rentalPrice: "", minMileage: "", maxMileage: "" },
    loading: false,
  },
  reducers: {
    setCars: (state, action) => {
      const newCars = action.payload.cars.filter(
        (newCar) =>
          !state.cars.some((existingCar) => existingCar.id === newCar.id)
      );
      state.cars = [...state.cars, ...newCars];
      state.totalCars = action.payload.totalCars;
      state.totalPages = action.payload.totalPages;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
      state.page = 1; // Скидаємо сторінку при зміні фільтрів
      state.cars = []; // Скидаємо попередні результати
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setCars, setFilters, setPage, setLoading } = carsSlice.actions;
export default carsSlice.reducer;
