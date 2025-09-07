import { userInfo } from "os";
import React from "react";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "bla bla",
      },
    };
  }

  async componentDidMount() {
    const token = `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`;

    const data = await fetch("https://api.github.com/users/Monu2114", {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    const json_data = await data.json();
    console.log(json_data);

    this.setState({
      userInfo: json_data,
    });
  }
  render() {
    console.log("child class component rendered");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Phone Number : 1234567890</h4>
      </div>
    );
  }
}
