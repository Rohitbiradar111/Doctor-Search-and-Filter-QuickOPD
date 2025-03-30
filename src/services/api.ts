import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.quickopd.com",
});

export const fetchDoctors = async () => {
  const response = await apiClient.get("/v1/public/doctors");
  return response.data.doctors;
};

export const fetchSpecializations = async () => {
  const response = await apiClient.get("/v3/public/specializations");
  return response.data;
};

export const fetchCities = async () => {
  const response = await apiClient.get("/v3/public/cities");
  return response.data.data.cities;
};

export const fetchAreas = async (cityId: string) => {
  const response = await apiClient.get(`/v3/public/areas?id=${cityId}`);
  return response.data.data.areas;
};
