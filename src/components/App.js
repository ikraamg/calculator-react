import React from 'react';
import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

export default function App() {
  return (
    <div id="App-body">
      <h1>Math Magicians Calculator</h1>
      <Display />
      <ButtonPanel />
    </div>
  );
}
