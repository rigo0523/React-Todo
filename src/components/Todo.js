import React from "react";

const Todo = (props) => {
  console.log(props, "props in todo app card");
  return (
    <div
      className={`tasks ${props.data.completed ? " completed" : ""}`}
      onclick={() => props.toggleItem(props.data.id)}
    >
      <p>{props.data.task}Test</p>
    </div>
  );
};

export default Todo;
