import React from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
class Content extends React.Component {
  state = { editTodo: {} };
  handleEditTodo = (todo) => {
    let { editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    if (isEmptyObj === false && editTodo.id === todo.id) {
      //save
      let { listTodo } = this.props;

      let listTodoCopy = [...listTodo];
      let objIndex = listTodoCopy.findIndex((item) => item.id === todo.id);
      listTodoCopy[objIndex].task = editTodo.task;
      this.setState({ listTodo: listTodoCopy, editTodo: {} });
      return;
    }
    //edit
    this.setState({ editTodo: todo });
  };

  handleDeleteTodo = (item) => {
    this.props.deleteTodo(item);
    toast.error("delete thanh cong !");
  };

  handleOnchange = (event) => {
    let editTodoCopy = { ...this.state.editTodo }; // tránh thay đổi dữ liệu trước khi gọi hàm setState (an toàn hơn)
    editTodoCopy.task = event.target.value;
    this.setState({ editTodo: editTodoCopy });
  };

  render() {
    let { listTodo } = this.props;
    let { editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0; // return === 0 => true
    console.log(">>>> check is empty", isEmptyObj);
    return (
      <>
        <div className="todo-content">
          {listTodo.map((item, index) => {
            return (
              <div className="todo-item" key={item.id}>
                {isEmptyObj === true ? (
                  <span>
                    {index + 1} - {item.task} &nbsp; &nbsp;
                  </span>
                ) : (
                  <>
                    {editTodo.id === item.id ? (
                      <span>
                        {index + 1} -{" "}
                        <input
                          value={editTodo.task}
                          onChange={(event) => this.handleOnchange(event)}
                        />
                      </span>
                    ) : (
                      <span>
                        {index + 1} - {item.task} &nbsp; &nbsp;
                      </span>
                    )}
                  </>
                )}
                <button
                  onClick={() => this.handleEditTodo(item)}
                  className="eidt"
                >
                  {isEmptyObj === false && editTodo.id === item.id
                    ? "Save"
                    : "Edit"}
                </button>
                &nbsp; &nbsp;
                <button
                  onClick={() => this.handleDeleteTodo(item)}
                  className="delete"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default Content;
