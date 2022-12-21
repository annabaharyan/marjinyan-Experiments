import React, { Component } from "react";
import ModuleList from "../pages/ModuleList";
import MyCourses from "../pages/MyCourses";

class MultipleComponent extends Component {
  state = {
    courses: [],
    modules: [],
    info: { duration: 0, price: 0 },
  };
  addModuleToCourse(id) {
    this.setState((curr) => {
      let myModule = curr.modules.find((elem) => elem.id === id);
      if (!curr.courses.includes(myModule)) {
        curr.courses.push(myModule);
      }

      curr.info.duration = curr.courses.reduce((a, b) => a + b.duration, 0);
      curr.info.price = curr.courses.reduce(
        (a, b) => a + b.duration * b.pricePerMonth,
        0
      );

      return curr;
    });
  }
  deleteCourse(id) {
    this.setState((current) => {
      current.modules = current.modules.filter((module) => module.id !== id);

      return current;
    });
  }
  discountPrice30() {
    this.setState((current) => {
      current.modules.map(
        (item) =>
          (item.pricePerMonth =
            item.pricePerMonth - (item.pricePerMonth * 30) / 100)
      );
      return current;
    });
  }
  sortPrice() {
    this.setState((current) => {
      current.modules.sort((a, b) => {
        return a.pricePerMonth - b.pricePerMonth;
      });

      return current;
    });
  }
  render() {
    const { courses, modules, info } = this.state;

    return (
      <div className="moduleContainer">
        <h1>Let's create a course</h1>
        <div id="main">
          <ModuleList
            modules={modules}
            onSelect={(id) => this.addModuleToCourse(id)}
            onDelete={(id) => this.deleteCourse(id)}
          />
          <button onClick={() => this.discountPrice30()} className="btn">
            Discount 30%
          </button>

          <button className="btn" onClick={() => this.sortPrice()}>
            Sort Price
          </button>
          <MyCourses course={courses} />
          <h3>Total price {info.price} AMD</h3>
          <h3>Total Duration {info.duration} months</h3>
        </div>
      </div>
    );
  }
  componentDidMount() {
    fetch("data/module.json")
      .then((response) => response.json())
      .then((data) => this.setState({ modules: data.lessons }));
  }
}

export default MultipleComponent;
