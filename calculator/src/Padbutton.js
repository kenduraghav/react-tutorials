import React from 'react';
import { caloptions, calcNumbers } from './calconfig';

const PadButton = ({
  displayText,
  onNumSelect,
  onOpSelect,
  onEquals,
  onPercentClick,
  onCancelClick,
  onClearEntry
}) => {
  // function handleChange(e) {
  //   //TODO: Handle Regular expression validation & Input Key
  //   // var regex = RegExp('\\d\\b');
  //   // if (regex.test(e.target.value)) {
  //   //
  //   // }
  //   onPadInput(e.target.value);
  // }
  return (
    <div className='ui segments'>
      <div className='ui segment'>
        <div className='ui transparent right aligned large input'>
          <input type='text' value={displayText} placeholder='0' readOnly />
        </div>
      </div>
      <div className='ui segment'>
        <button className='ui medium button' onClick={e => onPercentClick(e)}>
          {caloptions.percentage.label}
        </button>
        <button className='ui medium button' onClick={e => onClearEntry(e)}>
          {caloptions.clearEntry.label}
        </button>
        <button className='ui medium button' onClick={e => onCancelClick(e)}>
          {caloptions.cancel.label}
        </button>
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
          onClick={e => onOpSelect(e, caloptions.divide)}
        >
          {caloptions.divide.label}
        </button>
      </div>
      <div className='ui segment'>
        <button
          className='ui medium button'
          onClick={e => onNumSelect(e, calcNumbers.seven.value)}
        >
          {calcNumbers.seven.label}
        </button>
        <button
          className='ui medium button'
          onClick={e => onNumSelect(e, calcNumbers.eight.value)}
        >
          {calcNumbers.eight.label}
        </button>
        <button
          className='ui medium button'
          onClick={e => onNumSelect(e, calcNumbers.nine.value)}
        >
          {calcNumbers.nine.label}
        </button>
        <button
          className='ui medium button'
          onClick={e => onOpSelect(e, caloptions.multiply)}
        >
          {caloptions.multiply.label}
        </button>
      </div>
      <div className='ui segment'>
        <button
          className='ui medium button'
          onClick={e => onNumSelect(e, calcNumbers.four.value)}
        >
          {calcNumbers.four.label}
        </button>
        <button
          className='ui medium button'
          onClick={e => onNumSelect(e, calcNumbers.five.value)}
        >
          {calcNumbers.five.label}
        </button>
        <button
          className='ui medium button'
          onClick={e => onNumSelect(e, calcNumbers.six.value)}
        >
          {calcNumbers.six.label}
        </button>
        <button
          className='ui medium button'
          onClick={e => onOpSelect(e, caloptions.subtract)}
        >
          {caloptions.subtract.label}
        </button>
      </div>
      <div className='ui segment'>
        <button
          className='ui medium button'
          onClick={e => onNumSelect(e, calcNumbers.one.value)}
        >
          {calcNumbers.one.label}
        </button>
        <button
          className='ui medium button'
          onClick={e => onNumSelect(e, calcNumbers.two.value)}
        >
          {calcNumbers.two.label}
        </button>
        <button
          className='ui medium button'
          onClick={e => onNumSelect(e, calcNumbers.three.value)}
        >
          {calcNumbers.three.label}
        </button>
        <button
          className='ui medium button'
          onClick={e => onOpSelect(e, caloptions.addition)}
        >
          {caloptions.addition.label}
        </button>
      </div>
      <div className='ui segment'>
        <button className='ui medium button'>±</button>
        <button className='ui medium button'>{calcNumbers.zero.label}</button>
        <button className='ui medium button'>.</button>
        <button className='ui medium button' onClick={e => onEquals(e)}>
          {caloptions.equals.label}
        </button>
      </div>
    </div>
  );
};

export default PadButton;
