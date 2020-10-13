// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="list">
      {props.chores.map((item) => (
        <Todo toggleItem={props.toggleItem} key={item.id} data={item} />
      ))}
      <button className="clear-button" onClick={props.clearTask}>
        Clear Tasks
      </button>
    </div>
  );
};

export default TodoList;
