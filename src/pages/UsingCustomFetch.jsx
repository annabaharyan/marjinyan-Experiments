import React from "react";
import useFetch from "../hooks/useFetch";

const UsingCustomFetch = () => {
  const [loading, data, error] = useFetch(
    "https://randomuser.me/api?results=20&inc=name,picture"
  );
  if (loading) {
    return <p>Page is loading</p>;
  } else if (error) {
    return <p>Error:{error.message}</p>;
  }
  return (
    <>
      <ul>
     
        {data.results.map((elem, i) => (
          <li key={i}>{elem.name.first}
          <img src={elem.picture.thumbnail} alt=""/></li>
        ))}
      </ul>
    </>
  );
};

export default UsingCustomFetch;
