import React, { Component } from "react";
import "./App.css";
import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=1";

class App extends Component {
  state = {
    users: [],
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
        const user = data.results;
        this.setState((prevState) => ({
          users: user.concat(prevState.users),
        }));
      })
      .catch((err) => console.log(err + " Błąd adresu"));
  };
  render() {
    const users = this.state.users;
    return (
      <div>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users.length > 0 ? <UsersList user={users} /> : users}
      </div>
    );
  }
}

export default App;
