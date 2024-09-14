import React from "react";
import AddComponent from "./AddComponent";
import ComponentChild from "./ComponentChild";

// Create a new component
class MyComponent extends React.Component {
  /*
        JSX => return 1 block html

        nếu muốn return 2 khối div mà không cần div cha bọc ở ngoài thì sử dụng <React.Fragment>
    */

  // state = {
  //   name: "",
  //   age: 20,
  //   gender: true,
  //   mark: 6.5,
  // };
  state = {
    arrJobs: [
      { id: 1, title: "Software Engineer", salary: "500" },
      { id: 2, title: "Product Manager", salary: "400" },
      { id: 3, title: "Senior Software Engineer", salary: "1000" },
    ],
  };

  // Sử dụng arrow function để đảm bảo ngữ cảnh `this`
  handleChangeMark = (event) => {
    this.setState({
      mark: event.target.value,
    });
  };
  handleChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  // '...' là cú pháp để tạo bảng sao của mảng hiện tại (this.state.arrJobs) và thêm phần tử mới (job) vào cuối mảng đó
  addNewJob = (job) => {
    console.log(">>> check job form MyComponent: ", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };
  deleteAJob = (job) => {
    let currenJob = this.state.arrJobs;
    // filter() trả về mảng mới chứa các phần tử của mảng hiện tại không phải phần tử đã xóa
    currenJob = currenJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currenJob,
    });
  };

  componentDidMount() {
    console.log("Component did mount");
  }
  render() {
    // let name = 'Vo tan thanh';
    // let grade;
    // if (this.state.mark > 10 || this.state.mark < 0) {
    //   grade = "diem khong hop le";
    // } else if (this.state.mark >= 9.5) {
    //   grade = "Xuat sac";
    // } else if (this.state.mark >= 8 || this.state.mark <= 9.5) {
    //   grade = "Gioi";
    // } else if (this.state.mark >= 6.5) {
    //   grade = "Kha";
    // } else if (this.state.mark >= 5) {
    //   grade = "Trung binh";
    // } else {
    //   grade = "Yeu";
    // }

    return (
      // <React.Fragment>
      //     <div>
      //         <h1>Hello, World!</h1>
      //         {console.log('My name is ' + name)}
      //         <p>This is a simple React component, My name is  {name}</p>
      //     </div>

      //     <div>
      //     nếu muốn return 2 khối div mà không cần div cha bọc ở ngoài thì sử dụng React.Fragment
      //     </div>
      // </React.Fragment>
      // hoặc cú pháp như này

      <>
        {/* <div className="asbc">
          <h1>Hello, World!</h1>
          { {console.log('My name is ' + this.state.name)}}
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleChangeName(event)}
          />

          <p>My name is {this.state.name}</p>
        </div> */}
        {/* <div className="age">I'm {this.state.age} year old</div> */}
        {/* <div className="gender">
          {this.state.gender ? "I'm a male" : "I'm a female"}
        </div>
        <div className="mark">
          <input
            value={this.state.mark}
            type="number"
            onChange={(event) => this.handleChangeMark(event)}
          />
          {grade}
        </div> */}

        {/* <Form /> */}
        <AddComponent addNewJob={this.addNewJob} />
        <ComponentChild
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
