import React from "react";
import AddTodo from "./AddTodo";
import Content from "./Content";
import { toast } from "react-toastify";

class ListToDo extends React.Component {
  state = {
    listTodo: [
      { id: 1, task: "Học React" },
      { id: 2, task: "Đi ngủ" },
      { id: 3, task: "Chơi game " },
    ],
  };
  AddNewTodo = (item) => {
    this.setState({ listTodo: [...this.state.listTodo, item] });

    toast.success("Wow so easy !");
  };
  deleteTodo = (todo) => {
    let currenTodo = this.state.listTodo;
    currenTodo = currenTodo.filter((item) => item.id !== todo.id);
    this.setState({ listTodo: currenTodo });
  };

  render() {
    let { listTodo } = this.state;
    return (
      <>
        <AddTodo AddNewTodo={this.AddNewTodo} />
        <Content listTodo={this.state.listTodo} deleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default ListToDo;
