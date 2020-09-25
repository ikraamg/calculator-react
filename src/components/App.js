import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import './app.scss';
import calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        total: '',
        next: '',
        operation: '',
      },
    };
  }

  handleClick(buttonName) {
    const { data } = this.state;
    this.setState({ data: calculate(data, buttonName) });
  }

  render() {
    const { data } = this.state;
    const { total, next, operation } = data;
    return (
      <div id="App-body">
        <Display total={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={buttonName => this.handleClick(buttonName)} />
      </div>
    );
  }
}
