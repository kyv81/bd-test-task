import React, { Component } from 'react';
import './App.css';
import Home from 'containers/Home';
import Counter from 'containers/Counter';
import GIF from 'containers/GIF';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app">
        <nav className="nav">
          <Link to="/" className={'nav__link'}>
            Home
          </Link>
          <Link to="/counter" className={'nav__link'}>
            Counter
          </Link>
          <Link to="/GIF" className={'nav__link'}>
            GIF
          </Link>
        </nav>

        <div className="main">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/counter" component={Counter} />
            <Route path="/GIF" component={GIF} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
