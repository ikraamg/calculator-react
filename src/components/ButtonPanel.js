import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './buttonPanel.scss';

export default function ButtonPanel({ clickHandler }) {
  return (
    <div>
      <div className="gp1 gp">
        <Button name="AC" color="white" clickHandler={clickHandler} />
        <Button name="+/−" color="white" clickHandler={clickHandler} />
        <Button name="%" color="white" clickHandler={clickHandler} />
        <Button name="÷" clickHandler={clickHandler} />
      </div>
      <div className="gp2 gp">
        <Button name="7" color="white" clickHandler={clickHandler} />
        <Button name="8" color="white" clickHandler={clickHandler} />
        <Button name="9" color="white" clickHandler={clickHandler} />
        <Button name="X" clickHandler={clickHandler} />
      </div>
      <div className="gp3 gp">
        <Button name="4" color="white" clickHandler={clickHandler} />
        <Button name="5" color="white" clickHandler={clickHandler} />
        <Button name="6" color="white" clickHandler={clickHandler} />
        <Button name="-" clickHandler={clickHandler} />
      </div>
      <div className="gp4 gp">
        <Button name="1" color="white" clickHandler={clickHandler} />
        <Button name="2" color="white" clickHandler={clickHandler} />
        <Button name="3" color="white" clickHandler={clickHandler} />
        <Button name="+" clickHandler={clickHandler} />
      </div>
      <div className="gp5 gp">
        <Button name="0" color="white" wide clickHandler={clickHandler} />
        <Button name="." color="white" clickHandler={clickHandler} />
        <Button name="=" clickHandler={clickHandler} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
