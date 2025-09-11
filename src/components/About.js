import React from "react";
import UserClass from "./UserClass";
export default class About extends React.Component {
  componentDidMount() {
    //console.log("parent class mounted");
  }
  render() {
    // console.log("parent class rendered");
    return (
      <div>
        <div>
          <h1>About Us</h1>
          <UserClass name="Monu" />
        </div>
      </div>
    );
  }
}
