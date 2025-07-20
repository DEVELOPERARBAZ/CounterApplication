import React from "react";

class ClassBasedComponent extends React.Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div id="cComp">
        <h2>This is class Based Component</h2>
        <div className="content">
          <button onClick={this.increment}>+</button>
          <h3>{this.state.count}</h3>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

export default ClassBasedComponent;
