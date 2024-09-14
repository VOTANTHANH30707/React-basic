import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangetitleJobs = (event) => {
    this.setState({ title: event.target.value });
  };
  handleChangeSalary = (event) => {
    this.setState({ salary: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.salary || !this.state.title) {
      alert("Please enter both title and salary");
      return;
    }
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1000),
      title: this.state.title,
      salary: this.state.salary,
    });

    this.setState({ title: "", salary: "" });
  };

  render() {
    return (
      <form>
        <input
          placeholder="title"
          type="text"
          value={this.state.title}
          onChange={(event) => this.handleChangetitleJobs(event)}
        />

        <br />

        <input
          type="text"
          placeholder="salary"
          value={this.state.salary}
          onChange={(event) => this.handleChangeSalary(event)}
        />

        <br />
        <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
      </form>
    );
  }
}
export default AddComponent;
