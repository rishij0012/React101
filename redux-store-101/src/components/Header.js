import { useDispatch } from "react-redux";

import classes from "./Header.module.css";
import { authAction } from "../store/auth-slice";

const Header = ({ isLoggedIn }) => {
  const authDispatcher = useDispatch();

  const onLogutHandler = () => {
    authDispatcher(authAction.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLoggedIn && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={onLogutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
