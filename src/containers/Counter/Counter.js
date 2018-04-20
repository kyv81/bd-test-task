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
      <div className="counter">
        <div className="counter__buttons">
          <Button onClick={this.handleClickIncrement}>Increment</Button>
          <Button onClick={this.handleClickDecrement}>Decrement</Button>
          <Button onClick={this.handleClickReset}>Reset</Button>
        </div>
        <span className="counter__text">Counter: {counter}</span>
      </div>
    );
  }
}

export default Counter;
