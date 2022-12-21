import React, { Component } from "react";
import ModulItem from "./ModulItem";

export default class MyCourses extends Component {
  render() {
    const { course } = this.props;
   
    return (
      <div className="courses">
        {course && course.map((item) => (
         
          <ModulItem key={item.id} {...item}/>
        
        ))}
      </div>
    );
  }
}
