// src/hooks/useSinglePlace.js
import { useEffect, useState } from "react";
import { singlePlaces } from "../services/exploreService";

export const useSinglePlace = (placeId) => {
  const [placeData, setPlaceData] = useState(null);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        const data = await singlePlaces(placeId);
        setPlaceData(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (placeId) fetchPlace();
  }, [placeId]);

  return placeData;
};
