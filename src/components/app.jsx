import React, { Component } from "react";
import Counters from "./counters";
import Navbar from "./navbar";

class App extends Component {
  constructor() {
    super();
    console.log("App-Costructor");
  }
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
  };

  render() {
    console.log("App-Render");
    return (
      <React.Fragment>
        <Navbar
          cartCount={this.state.counters.filter((c) => c.value > 0).length}
        />
        ;
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.onDelete}
            onReset={this.onReset}
            onIncrement={this.onIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
  onDelete = (counterId) => {
    console.log("delete handled caught", counterId);
    const newCounters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: newCounters });
  };

  onReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });

    console.log(counters);
  };
  onIncrement = (counter) => {
    console.log("increament clicked", counter);

    const counters = [...this.state.counters];
    const counterIndex = counters.indexOf(counter);

    console.log("cloned data :", counters);
    counters[counterIndex] = counter;
    counters[counterIndex].value++;
    console.log("updated data :", counters);
    this.setState({ counters: counters });

    //this will not work
    // this.state.count++;

    // this.setState({ count: this.state.count + 1 });
  };
}

export default App;
