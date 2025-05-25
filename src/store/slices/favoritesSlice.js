import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.some((car) => car.id === action.payload.id)) {
        state.push(action.payload);
      }

      localStorage.setItem("favorites", JSON.stringify(state));
    },
    removeFavorite: (state, action) => {
      const newState = state.filter((car) => car.id !== action.payload);

      localStorage.setItem("favorites", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
