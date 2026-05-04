import { useEffect, useState } from "react";
import { allPlaces } from "../services/exploreService.js";

export const useAllPlaces = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const places = await allPlaces();
        setData(places);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return { data };
};
