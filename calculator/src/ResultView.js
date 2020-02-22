import React from 'react';

const ResultView = props => {
  return (
    <div className='ui relaxed grid'>
      <div className='row'>
        <div className='column'>Output:</div>
      </div>
      <div className='row'>
        <div className='column'>{props.output}</div>
      </div>
    </div>
  );
};

export default ResultView;
