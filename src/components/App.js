import React, { Component } from "react";
import "./App.css";
import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=5";

class App extends Component {
  state = {
    users: null,
  };
  handleDataFetch = () => {
    fetch(API)
      .then((res) => {
        if (res.ok) {
          // console.log(res);

          return res;
        }
        throw Error(res.status);
      })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          users: data.results,
        });
      })
      .catch((err) => console.log(err + " Błąd adresu"));
  };
  render() {
    const users = this.state.users;
    return (
      <div>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users ? <UsersList user={users} /> : users}
      </div>
    );
  }
}

export default App;
