import { useEffect, useState } from "react";

export const useProductService = (url, dependecies) => {
  const [isLoading, setLoading] = useState(false);
  const [fetchData, setFetchData] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        setLoading(true);
        setFetchData(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, dependecies);

  return [isLoading, fetchData];
};
