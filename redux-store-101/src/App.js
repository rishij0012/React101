import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Counter from './components/Counter';
import Headers from "./components/Header";
import Auth from "./components/Auth";

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Fragment>
      <Headers isLoggedIn={isLoggedIn} />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Counter />}
    </Fragment>
  );
}

export default App;
