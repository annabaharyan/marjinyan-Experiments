import { useInput } from "../../hooks/useInput";
import { useState } from "react";
import "./search.css";
const withSearch = (WrappedComponent) => {
  return (props) => {
    const searchedText = useInput("text");

    const [filtered, setFiltered] = useState(props.books);
    const handleSubmit = (e) => {
      e.preventDefault();
      const result = props.books.filter((book) =>
        book.title.includes(searchedText.value)
      );
      setFiltered(result);
    };
    const showAll = () => {
      setFiltered(props.books);
      searchedText.reset();
    };
    return (
      <div className="search">
        <button onClick={showAll} className="searchBtn">
          Show all books
        </button>
        <form onSubmit={handleSubmit} className="searchForm">
          <input placeholder="Search for..." {...searchedText} />
          <button>Search</button>
        </form>
        <WrappedComponent books={filtered} />
      </div>
    );
  };
};
export default withSearch;
