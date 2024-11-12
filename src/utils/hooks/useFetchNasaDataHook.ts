import { useState, useEffect } from "react";
import axios from "axios";

const useFetchNasaDataHook = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNasaData = async () => {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=HCTXq6OHlLqm12FZLcQofcyn8iEBvnEga9Bpw67k",
        );
        const sortedData = response.data.near_earth_objects
          .map((neo) => ({
            name: neo.name,
            minDiameter:
              neo.estimated_diameter.kilometers.estimated_diameter_min,
            maxDiameter:
              neo.estimated_diameter.kilometers.estimated_diameter_max,
            averageDiameter:
              (neo.estimated_diameter.kilometers.estimated_diameter_min +
                neo.estimated_diameter.kilometers.estimated_diameter_max) /
              2,
          }))
          .sort((a, b) => b.averageDiameter - a.averageDiameter);
        setData(sortedData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchNasaData();
  }, []);

  return { data, loading, error };
};

export default useFetchNasaDataHook;
