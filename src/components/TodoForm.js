import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }

  handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitTask = (e) => {
    e.preventDefault();
    this.setState({ item: "" });
    this.props.addTask(e, this.state.item);
  };

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.submitTask}>
        <label htmlFor="item">ITEM</label>
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
