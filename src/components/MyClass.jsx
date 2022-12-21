import React from "react";

class MyClass extends React.Component {
  state = {
    skills: [],
    allSkills: ["HTML", "CSS", "JS", "React"],
  };
  addItem() {
    let randomInd = Math.floor(Math.random() * this.state.allSkills.length);
    console.log(this.state.skills.includes(this.state.allSkills[randomInd]));
    if (
      this.state.skills.length < 0 ||
      !this.state.skills.includes(this.state.allSkills[randomInd])
    ) {
      this.setState((curr) => {
        curr.skills.push(curr.allSkills[randomInd]);
        return curr;
      });
    }
  }
  render() {
    let myState = this.state;

    return (
      <>
        <ul>
          {myState.skills.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <button onClick={() => this.addItem()}>Add</button>
      </>
    );
  }
}
export default MyClass;
