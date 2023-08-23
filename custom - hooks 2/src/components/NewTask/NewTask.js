import { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useFetch from "../../hooks/use-fetch";

const NewTask = (props) => {
  const { error, isLoading, sendReq: newTaskSaver } = useFetch();
  const transformationLogic = (textTask, data) => {
    console.log("🚀 ~ file: NewTask.js:10 ~ transformationLogic ~ data:", data);
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: textTask };
    props.onAddTask(createdTask);
  };
  
  const enterTaskHandler = async (taskText) => {
    newTaskSaver(
      {
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
        url: "https://test-e3fd5-default-rtdb.firebaseio.com/tasks.json",
      },
      transformationLogic.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
