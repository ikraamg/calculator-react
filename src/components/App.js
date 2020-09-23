import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import './app.scss';
import calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(buttonName) {
    const { total, next, operation } = this.state;
    // calculate({ total, next, operation }, buttonName);
    // this.setState({ total: { buttonName } });
    console.log(`clicked ${buttonName}`);
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div id="App-body">
        <Display result={total} />
        <ButtonPanel clickHandler={buttonName => this.handleClick(buttonName)} />
      </div>
    );
  }
}
