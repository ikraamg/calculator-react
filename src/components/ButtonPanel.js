import React from 'react';
import Button from './Button';
import './buttonPanel.scss';

export default function ButtonPanel() {
  return (
    <div>
      <div className="gp1 gp">
        <Button name="AC" color="white" />
        <Button name="+-" color="white" />
        <Button name="%" color="white" />
        <Button name="÷" />
      </div>
      <div className="gp2 gp">
        <Button name="7" color="white" />
        <Button name="8" color="white" />
        <Button name="9" color="white" />
        <Button name="X" />
      </div>
      <div className="gp3 gp">
        <Button name="4" color="white" />
        <Button name="5" color="white" />
        <Button name="6" color="white" />
        <Button name="-" />
      </div>
      <div className="gp4 gp">
        <Button name="1" color="white" />
        <Button name="2" color="white" />
        <Button name="3" color="white" />
        <Button name="+" />
      </div>
      <div className="gp5 gp">
        <Button name="0" color="white" wide />
        <Button name="." color="white" />
        <Button name="=" />
      </div>
    </div>
  );
}
