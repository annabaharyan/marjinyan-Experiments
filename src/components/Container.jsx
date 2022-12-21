import React from "react";
import Books from "../pages/Books";
class Container extends React.Component {
  state = {
    books: [],
  };
  render() {
    const { books } = this.state;
    return (
      <div>
        <h1>Welcome to my bookstore</h1>
        <div id="books" style={{display:'flex'}}>
          {books.map((elem) => {
            return (
              <Books
                key={elem.id}
                id={elem.id}
                pic={elem.pic}
                title={elem.title}
                lang={elem.progLanguage}
               
              />
            );
          })}
        </div>
      </div>
    );
  }
  componentDidMount() {
    fetch("data/books.json")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({ books: data.items });
      });
  }
}
export default Container;
