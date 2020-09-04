import React from "react";

const Todo = (props) => {
  const handleClick = (e) => {
    props.toggleItem(props.data.id);
  };
  console.log(props, "props in todo app card");
  return (
    <div
      className={`tasks${props.data.completed ? " completed" : ""}`}
      onclick={handleClick}
    >
      <p>{props.data.task}</p>
    </div>
  );
};

export default Todo;
