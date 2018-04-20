import React, { Component } from 'react';
import Input from 'components/Input';
import './Home.css';

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
      <div className="home">
        <Input
          onChange={this.handleChange}
          placeholder="Ваше имя"
          value={name}
        />
        <p className="home__text">Приветствую, {name || 'пользователь'}</p>
      </div>
    );
  }
}

export default Home;
