import React from "react";
class FetchClass extends React.Component {
  state = {
    users: [],
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <h3>Now we have {users.length} users</h3>
        <div className="component">
          {users.map((item, index) => {
            return (
              <div key={index} className="gridItem">
                <img src={item.picture.large} alt="imgFetch" />
                <h3>
                  {item.name.first} {item.name.last}
                </h3>
                <p>{item.dob.age} years old</p>
                <button onClick={() => this.deleteItem(index)}>delete</button>
              </div>
            );
          })}
        </div>
      </>
    );
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=30&inc=name,picture,dob")
      .then((resp) => resp.json())
      .then((data) => this.setState({ users: data.results }));
  }
  deleteItem(index){
    this.setState(curr=>{
        curr.users.splice(index,1)
        return curr
    })
  }
}
export default FetchClass;
