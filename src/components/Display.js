import React from 'react';
import PropTypes from 'prop-types';
import './display.scss';

export default function Display(props) {
  const { next, operation } = props;
  let { total } = props;
  if ((total) === '') {
    total = '0';
  }
  return (
    <div className="display">
      {total}
      {' '}
      {operation}
      {' '}
      {next}
    </div>
  );
}

Display.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};
