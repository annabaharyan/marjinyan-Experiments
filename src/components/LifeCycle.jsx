import React from "react";
class LifeCycle extends React.Component {
  state = {
    count: 0,
    text: "",
  };
  constructor() {
    super();
    console.log("constructor");
  }
  clickBTN() {
    this.setState((cur) => {
      cur.count++;
      return cur;
    });
  }

  render() {
    console.log("render");
    const { count, text } = this.state;
    return (
      <>
        <h1>Let's count</h1>
        <p>{text}</p>
        <h3>You've clicked the button {count} times</h3>
        <button onClick={() => this.clickBTN()}>Click</button>
      </>
    );
  }
  componentDidMount() {
    console.log("mount");
    this.setState({ text: "Start" });
  }
  shouldComponentUpdate(nextprops, nextState) {
    console.log("shouldUpdate");
    if (nextState.count > 5) {
      return false;
    }
    return true;
  }
  componentDidUpdate() {
    let d = new Date();
    let text = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    console.log(`updateing ${text} `);
  }
}
export default LifeCycle;
