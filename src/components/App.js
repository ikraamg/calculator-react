import React from 'react';
import './app.scss';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

export default function App() {
  return (
    <div id="App-body">
      <Display />
      <ButtonPanel />
    </div>
  );
}
