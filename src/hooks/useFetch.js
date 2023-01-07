import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((res) => {
        setdata(res);
        setloading(false);
      })
      .catch((err) => {
        seterror(err);
      })
      .finally(() => {
        setloading(false);
      })
  }, [])
  
  return [loading, data, error];
};

export default useFetch;
