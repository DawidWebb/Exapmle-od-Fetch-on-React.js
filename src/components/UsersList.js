import React from "react";
import "./UsersList.css";
const UsersList = (props) => {
  const users = props.user.map((user) => (
    <li key={user.login.uuid}>
      <img src={user.picture.thumbnail} alt="user picture" />
      <h4>{`${user.name.title} ${user.name.last}`}</h4>
      <p>{user.email}</p>
    </li>
  ));

  return <ul className="users">{users}</ul>;
};

export default UsersList;
