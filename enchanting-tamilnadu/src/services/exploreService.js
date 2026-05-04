import axios from "axios";
const BASE_URL = "https://nijin-server.vercel.app/api/explorer";

export const allPlaces = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
}

export const singlePlaces = async (placeId) => {
    const response = await axios.get(`${BASE_URL}/places/${placeId}`);
    return response.data;
}