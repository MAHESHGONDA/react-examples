import React, { Component } from "react";

class Counter extends Component {
  state = {
    // count: this.props.value,
    // imageUrl: "http://picsum.photos/200",
  };

  styles = {
    fontSize: 15,
    fontWeight: "Bold",
  };

  constructor() {
    super();
    console.log("Counter-Costructor");
  }

  // constructor() {
  //   super();

  //   this.handleIncremet = this.handleIncremet.bind(this);
  // }
  render() {
    console.log("Counter-Render");
    // return (  );
    // React.createElement(h1)
    let classes = this.getBadgeClasses();
    console.log(this.props);
    return (
      <React.Fragment>
        {/* <span>{this.state.count}</span> -> commented*/}
        {/* <img src={this.state.imageUrl} alt="randomPic"></img> -> commented**/}
        {/* <span>{this.formatCounter()}</span> */}
        {this.props.children}
        <span style={this.styles} className={classes}>
          {this.formatCounter()}
        </span>
        <button
          onClick={() => this.props.handleIncremet(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increament
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
  //uses constructor
  // handleIncremet() {
  //   console.log("increament clicked", this);
  //   // this.state.count++;
  // }
  //using arrow functions
  // handleIncremet = () => {
  //   console.log("increament clicked", this);
  //   //this will not work
  //   // this.state.count++;

  //   this.setState({ count: this.state.count + 1 });
  // };
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    //object destructring
    //taking data from property and renaming it to "count"
    const { value: count } = this.props.counter;
    // return count === 0 ? "<h1>Zero</h1>" : count;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
