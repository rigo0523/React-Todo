import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }

  handleChanges = (e) => {
    e.preventDefault();
    this.setState({ item: e.target.value });
  };

  submitTask = (e) => {
    e.preventDefault();
    this.setState({ item: "" });
    this.props.addTask(this.state.item);
  };

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.submitTask}>
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button>ADD CHORE</button>
      </form>
    );
  }
}

export default TodoForm;
