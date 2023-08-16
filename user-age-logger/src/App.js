import { Fragment, useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import ListUser from "./components/Users/ListUser";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserhandler = (formData) => {
    setUserList((preState) => {
      return [...preState, formData];
    });
  };
  return (
    <Fragment>
      <AddUsers addUserhandler={addUserhandler}/>
      <ListUser users={userList} />
    </Fragment>
  );
}

export default App;
