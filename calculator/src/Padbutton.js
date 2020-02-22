import React from 'react';
import { caloptions, calcNumbers } from './calconfig';

const PadButton = ({ input, onNumSelect, onOpSelect, onEquals }) => {
  // function handleChange(e) {
  //   //TODO: Handle Regular expression validation & Input Key
  //   // var regex = RegExp('\\d\\b');
  //   // if (regex.test(e.target.value)) {
  //   //
  //   // }
  //   onPadInput(e.target.value);
  // }

  function handleNumClick(event, value) {
    event.preventDefault();
    onNumSelect(value);
  }

  function handleOpClick(event, op) {
    event.preventDefault();
    onOpSelect(op);
  }

  function handleEquals(e) {
    e.preventDefault();
    onEquals();
  }

  return (
    <div className='ui segments'>
      <div className='ui segment'>
        <div className='ui transparent right aligned large input'>
          <input type='text' value={input} placeholder='0' readOnly />
        </div>
      </div>
      <div className='ui segment'>
        <button className='ui medium button'>
          {caloptions.percentage.label}
        </button>
        <button className='ui medium button'>
          {caloptions.clearEntry.label}
        </button>
        <button className='ui medium button'>{caloptions.cancel.label}</button>
        <button className='ui medium button'>
          {caloptions.backspace.label}
          <i className='eraser icon'></i>
        </button>
      </div>
      <div className='ui segment'>
        <button className='ui medium button'>1/x</button>
        <button className='ui medium button'>x²</button>
        <button className='ui medium button'>²√x</button>
        <button
          className='ui medium button'
          onClick={e => handleOpClick(e, caloptions.divide)}
        >
          {caloptions.divide.label}
        </button>
      </div>
      <div className='ui segment'>
        <button
          className='ui medium button'
          onClick={e => handleNumClick(e, calcNumbers.seven.value)}
        >
          {calcNumbers.seven.label}
        </button>
        <button
          className='ui medium button'
          onClick={e => handleNumClick(e, calcNumbers.eight.value)}
        >
          {calcNumbers.eight.label}
        </button>
        <button
          className='ui medium button'
          onClick={e => handleNumClick(e, calcNumbers.nine.value)}
        >
          {calcNumbers.nine.label}
        </button>
        <button
          className='ui medium button'
          onClick={e => handleOpClick(e, caloptions.multiply)}
        >
          {caloptions.multiply.label}
        </button>
      </div>
      <div className='ui segment'>
        <button
          className='ui medium button'
          onClick={e => handleNumClick(e, calcNumbers.four.value)}
        >
          {calcNumbers.four.label}
        </button>
        <button
          className='ui medium button'
          onClick={e => handleNumClick(e, calcNumbers.five.value)}
        >
          {calcNumbers.five.label}
        </button>
        <button
          className='ui medium button'
          onClick={e => handleNumClick(e, calcNumbers.six.value)}
        >
          {calcNumbers.six.label}
        </button>
        <button
          className='ui medium button'
          onClick={e => handleOpClick(e, caloptions.subtract)}
        >
          {caloptions.subtract.label}
        </button>
      </div>
      <div className='ui segment'>
        <button
          className='ui medium button'
          onClick={e => handleNumClick(e, calcNumbers.one.value)}
        >
          {calcNumbers.one.label}
        </button>
        <button
          className='ui medium button'
          onClick={e => handleNumClick(e, calcNumbers.two.value)}
        >
          {calcNumbers.two.label}
        </button>
        <button
          className='ui medium button'
          onClick={e => handleNumClick(e, calcNumbers.three.value)}
        >
          {calcNumbers.three.label}
        </button>
        <button
          className='ui medium button'
          onClick={e => handleOpClick(e, caloptions.addition)}
        >
          {caloptions.addition.label}
        </button>
      </div>
      <div className='ui segment'>
        <button className='ui medium button'>±</button>
        <button className='ui medium button'>{calcNumbers.zero.label}</button>
        <button className='ui medium button'>.</button>
        <button className='ui medium button' onClick={e => handleEquals(e)}>
          {caloptions.equals.label}
        </button>
      </div>
    </div>
  );
};

export default PadButton;
