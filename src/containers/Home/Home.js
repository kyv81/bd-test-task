import React, { Component } from 'react';
import Input from 'components/Input';

class Home extends Component {
  state = {
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    const { name } = this.state;

    return (
      <div>
        <Input onChange={this.handleChange} value={name} />
        <p>Приветствую, {name || 'пользователь'}</p>
      </div>
    );
  }
}

export default Home;
