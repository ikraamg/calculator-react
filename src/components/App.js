import React, { Component } from 'react';
import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      result: '0',
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="App-body">
        <h1>Math Magicians Calculator</h1>
        <Display result={result} />
        <ButtonPanel />
      </div>
    );
  }
}
