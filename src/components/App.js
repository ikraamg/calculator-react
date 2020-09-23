import React from 'react';
import './app.scss';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

export default function App() {
  return (
    <div id="App-body">
      <Display />
      <ButtonPanel />
    </div>
  );
}
