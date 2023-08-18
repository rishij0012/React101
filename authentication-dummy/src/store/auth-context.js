import React, { useState, useEffect } from "react";

// AuthContext is object containing the auth component
// we need to provide it .... wrap the compoent
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {
    console.log(
      "🚀 ~ file: auth-context.js:23 ~ loginHandler ~ email, password:",
      email,
      password
    );
  },
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getLoggedIn = localStorage.getItem("isLoggedIn");
    console.log("🚀 ~ file: App.js:13 ~ useEffect ~ getLoggedIn:", getLoggedIn);
    if (getLoggedIn && getLoggedIn === "LOGGED_IN") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    console.log(
      "🚀 ~ file: auth-context.js:23 ~ loginHandler ~ email, password:",
      email,
      password
    );
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "LOGGED_IN");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
