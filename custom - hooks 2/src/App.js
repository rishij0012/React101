import React, { useCallback, useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useFetch from "./hooks/use-fetch";

const requestConfig = {
  url: "https://test-e3fd5-default-rtdb.firebaseio.com/tasks.json",
};

console.log("check123123");

function App() {
  console.log("🚀 ~ file: App.js:12 ~ App ~ App:");

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  // const fetchTasks = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       'https://test-e3fd5-default-rtdb.firebaseio.com/tasks.json'
  //     );

  //     if (!response.ok) {
  //       throw new Error('Request failed!');
  //     }

  //     const data = await response.json();

  //     const loadedTasks = [];

  //     for (const taskKey in data) {
  //       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  //     }

  //     setTasks(loadedTasks);
  //   } catch (err) {
  //     setError(err.message || 'Something went wrong!');
  //   }
  //   setIsLoading(false);
  // };

  const { error, isLoading, sendReq: fetchTasks } = useFetch();

  useEffect(() => {
    const transformationLogic = (taskList) => {
      const loadedTasks = [];

      for (const taskKey in taskList) {
        loadedTasks.push({ id: taskKey, text: taskList[taskKey].text });
      }

      setTasks(loadedTasks);
    };
    fetchTasks(requestConfig, transformationLogic);
  }, [fetchTasks]); // here we need to add the fetch task as dependency as react dont know abt the fetch task ... setTask he knows
  // if i add it then -> 1. run : get the task ... setTask get trigger ... re-render APP component
  // here we have fetch task again
  //         IMP
  // here we have seen that fetch from 1st state != fetch from second state
  // if we add in the dependency then re-render happens

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
