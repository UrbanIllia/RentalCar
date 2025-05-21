import axios from "axios";

const api = axios.create({
  baseURL: "https://car-rental-api.goit.global",
});

export const fetchCars = async (params = {}) => {
  const response = await api.get("/cars", { params });
  return response.data;
};

export const fetchCarById = async (id) => {
  const response = await api.get(`/cars/${id}`);
  return response.data;
};

export const fetchBrands = async () => {
  const response = await api.get("/brands");
  return response.data;
};
