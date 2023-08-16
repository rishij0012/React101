import React from "react";
import classes from "./ListUser.module.css";
import Cards from "../UI/Cards";

function ListUser(props) {
  const { users } = props;
  return (
    <Cards className={classes.users}>
    {users.length == 0 && <center>No item</center>}
      <ul>
        {users.map((user) => {
          return (
            <li>
              {user.name} - {user.age}
            </li>
          );
        })}
      </ul>
    </Cards>
  );
}

export default ListUser;
