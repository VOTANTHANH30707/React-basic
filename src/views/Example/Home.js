import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Color from "../HOC/Color";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.navigate("/about"); // Điều hướng đến trang About sau 2 giây
    // }, 2000);
  }

  handleDeleteUser = (user) => {
    console.log("delete", user);
    this.props.deleteUser(user);
  };
  handleCreateUser = () => {
    console.log("create");
    this.props.createUser();
  };

  render() {
    let listUsers = this.props.dataRedux;
    console.log(">>> check props redux: ", this.props.dataRedux);

    return (
      <>
        <div>Home</div>
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name} &nbsp;{" "}
                  <span
                    className="delete"
                    onClick={() => this.handleDeleteUser(item)}
                  >
                    x
                  </span>
                </div>
              );
            })}
          <button onClick={() => this.handleCreateUser()}>Add new</button>
        </div>
      </>
    );
  }
}

// Bọc class component bằng một functional component để sử dụng hook `useNavigate`
function WithNavigate(props) {
  let navigate = useNavigate();
  return <Home {...props} navigate={navigate} />;
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users, // lấy dữ liệu từ store Redux
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (user) => dispatch({ type: "DELETE_USER", payload: user }),
    createUser: () => dispatch({ type: "CREATE_USER" }), // thêm action tạo user mới
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Color(WithNavigate)); // lien ket redux vs react
