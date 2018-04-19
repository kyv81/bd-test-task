import React, { Component } from 'react';
import Button from 'components/Button';
import './Counter.css';

class Counter extends Component {
  state = {
    counter: 0,
  };

  handleClickIncrement = () => {
    this.setState(({ counter }) => ({ counter: counter + 1 }));
  };

  handleClickDecrement = () => {
    this.setState(({ counter }) => ({ counter: counter - 1 }));
  };

  handleClickReset = () => {
    this.setState(state => ({ counter: 0 }));
  };

  render() {
    const { counter } = this.state;

    return (
      <div className="buttons">
        <Button className="btn" onClick={this.handleClickIncrement}>
          Increment
        </Button>
        <Button className="btn" onClick={this.handleClickDecrement}>
          Decrement
        </Button>
        <Button className="btn" onClick={this.handleClickReset}>
          Reset
        </Button>
        <span>Counter: {counter}</span>
      </div>
    );
  }
}

export default Counter;
