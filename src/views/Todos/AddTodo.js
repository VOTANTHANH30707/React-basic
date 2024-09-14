import React from "react";

class AddTodo extends React.Component {
  state = {
    task: "",
  };
  handleOnchange = (event) => {
    this.setState({ task: event.target.value });
  };

  handleAddToDo = (event) => {
    if (!this.state.task) {
      alert("Please enter a task");
      return;
    }

    event.preventDefault();
    let todo = {
      id: Math.floor(Math.random() * 100),
      task: this.state.task,
    };
    this.props.AddNewTodo(todo);
    this.setState({ task: "" });
  };
  render() {
    let { task } = this.state;
    return (
      <div className="add-todo">
        <input
          value={task}
          onChange={(event) => this.handleOnchange(event)}
          type="text"
          placeholder="Add Todo..."
        />
        <button onClick={(event) => this.handleAddToDo(event)} className="add">
          Add
        </button>
      </div>
    );
  }
}
export default AddTodo;
