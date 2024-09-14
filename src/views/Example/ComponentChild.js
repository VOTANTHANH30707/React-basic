import React from "react";
import "./Demo.scss";

class ComponentChild extends React.Component {
  state = {
    showJobs: false,
  };
  handleTShowHide = () => {
    this.setState({ showJobs: !this.state.showJobs });
  };

  handleOnclickDelete = (item) => {
    console.log(">>handleOnclickDelete: ", item);
    this.props.deleteAJob(item);
  };

  render() {
    console.log("check props: ", this.props);
    let { arrJobs } = this.props;
    let { showJobs } = this.state;

    return (
      <>
        {showJobs === false ? (
          <div>
            <button className="btn-show" onClick={() => this.handleTShowHide()}>
              Show
            </button>
          </div>
        ) : (
          <>
            <div className="jobs-item">
              {arrJobs.map((item, index) => {
                return (
                  <div key={item.id}>
                    {item.id} - {item.title} - {item.salary} ${" "}
                    <span onClick={() => this.handleOnclickDelete(item)}>
                      x
                    </span>
                  </div>
                );
              })}
            </div>

            <div>
              <button
                className="btn-hide"
                onClick={() => this.handleTShowHide()}
              >
                Hide
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default ComponentChild;
