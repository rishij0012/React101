import React, { useContext, useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext, { AuthContextProvider } from "./store/auth-context";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log("🚀 ~ file: App.js:9 ~ App ~ isLoggedIn:", isLoggedIn);

  // useEffect(() => {
  //   const getLoggedIn = localStorage.getItem("isLoggedIn");
  //   console.log("🚀 ~ file: App.js:13 ~ useEffect ~ getLoggedIn:", getLoggedIn);
  //   if (getLoggedIn && getLoggedIn === "LOGGED_IN") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", "LOGGED_IN");
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  const ctx = useContext(AuthContext);

  return (
    // we nned to provide the value even if we have to use consumer
    // <AuthContextProvider>
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login onLogin={ctx.onLogin} />}
        {ctx.isLoggedIn && <Home  />}
      </main>
    </React.Fragment>
    // </AuthContextProvider>
    // <AuthContext.Provider value={{ isLoggedIn: isLoggedIn , onLogout: logoutHandler }}>
    // </AuthContext.Provider>

  );
}

export default App;
