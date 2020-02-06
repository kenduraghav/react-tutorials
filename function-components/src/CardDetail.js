import React from 'react';

const CardDetail = props => {
  return (
    <div className='comment'>
      <div className='content'>
        <div className='ui dividing header'>{props.question}</div>
        <div className='description'>
          <p>{props.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
