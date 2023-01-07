import React from "react";
import withSearch from "../components/withSearch/withSearch";
import BookList from "../components/BookList/BookList";
import useFetch from "../hooks/useFetch";
const HOC = withSearch(BookList);
const UseHOC = () => {
  const [loading, data] = useFetch("./data/mybooks.json");

  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <>
      {console.log(data.items)}
      <h1 style={{ textAlign: "center" }}>Best selling books</h1>
      <HOC books={data.items} />
    </>
  );
};

export default UseHOC;
