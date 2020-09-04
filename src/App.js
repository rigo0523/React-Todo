import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";

const chores = [
  {
    task: "Clean room",
    id: Date.now(),
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change
  //handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      chores,
    };
  }

  addTask = (item) => {
    const newTask = {
      task: item,
      id: Date.now(),
      completed: false,
    };
    this.setState({ chores: [...this.state.chores, newTask] });
  };

  toggleItem = (itemId) => {
    console.log(itemId, "itemID test");
    this.setState({
      chores: this.state.chores.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();

    this.setState({
      chores: this.state.chores.filter((item) => {
        return !item.completed;
      }),
    });
  };

  render() {
    return (
      <div>
        <h2>TO DO APP</h2>
        <TodoForm addTask={this.addTask} />
        <TodoList
          chores={this.state.chores}
          toggleItem={this.toggleItem}
          clearTask={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
