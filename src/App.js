import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    count: 0,
  };

  add = () => {
    this.setState((current) => ({
      count: current.count + 1,
    }));
  };

  minus = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState((current) => ({
        isLoading: false,
        count: current.count,
      }));
    }, 1000);
  }

  render() {
    if (this.state.isLoading) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          <h1>The number is: {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>
        </div>
      );
    }
  }
}

export default App;
