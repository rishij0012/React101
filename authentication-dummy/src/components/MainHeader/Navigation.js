import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../store/auth-context';

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  
  console.log("🚀 ~ file: Navigation.js:10 ~ Navigation ~ ctx:", ctx)
  return (
    // <AuthContext.Consumer>
    //   {(ctx) => {
        <nav className={classes.nav}>
        <ul>
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {ctx.isLoggedIn && (
            <li>
              <button onClick={ctx.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    
    //   }}
    // </AuthContext.Consumer>
  );
};

export default Navigation;
