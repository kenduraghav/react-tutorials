import React from 'react';
import { connect } from 'react-redux';
import './calculator.css';

const ResultView = ({ output }) => {
  return (
    <div className='ui relaxed grid '>
      <div className='row'>
        <div className='column'>Output:</div>
      </div>
      <div className='row'>
        <div className='column'>{output}</div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return { output: state.calcReducers.outputText };
};
export default connect(mapStateToProps)(ResultView);
