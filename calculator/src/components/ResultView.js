import React from 'react';
import { connect } from 'react-redux';

const ResultView = ({ output }) => {
  return (
    <div className='ui relaxed grid'>
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
  return { output: state.output };
};
export default connect(mapStateToProps)(ResultView);
