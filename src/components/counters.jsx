import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    console.log("Conunters-Costructor");
  }
  render() {
    console.log("Counters-Render");
    return (
      //   <main className="container">
      <React.Fragment>
        <button
          onClick={this.props.onReset}
          className="btn btn-danger btn-small m-2"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <div>
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={this.props.onDelete}
              handleIncremet={this.props.onIncrement}
            >
              <h1>counter number #{counter.id}</h1>
            </Counter>
          </div>
        ))}
      </React.Fragment>
      //   </main>
    );
  }
}

export default Counters;
