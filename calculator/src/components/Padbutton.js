import React from 'react';
import { connect } from 'react-redux';

class PadButton extends React.Component {
  render() {
    const { calcOperations, numbers, displayText } = this.props;
    console.log(numbers);
    return (
      <div className='ui segments'>
        <div className='ui segment'>
          <div className='ui transparent right aligned large input'>
            <input type='text' value={displayText} placeholder='0' readOnly />
          </div>
        </div>
        <div className='ui segment'>
          <button className='ui  medium button'>
            {calcOperations[0].percentage.label}
          </button>
          <button className='ui  medium button'>
            {calcOperations[1].clearEntry.label}
          </button>
          <button className='ui  medium button'>
            {calcOperations[2].cancel.label}
          </button>
          <button className='ui  medium button'>
            {calcOperations[3].backspace.label}
            <i className='eraser icon'></i>
          </button>
        </div>
        <div className='ui segment'>
          <button className='ui medium button'>1/x</button>
          <button className='ui medium button'>x²</button>
          <button className='ui medium button'>²√x</button>
          <button className='ui medium button'>
            {calcOperations[4].divide.label}
          </button>
        </div>
        <div className='ui segment'>
          <button className='ui large basic button'>
            {numbers.seven.label}
          </button>
          <button className='ui large basic button'>
            {numbers.eight.label}
          </button>
          <button className='ui large basic  button'>
            {numbers.nine.label}
          </button>
          <button className='ui large button'>
            {calcOperations[5].multiply.label}
          </button>
        </div>
        <div className='ui segment'>
          <button className='ui large basic button'>
            {numbers.four.label}
          </button>
          <button className='ui large basic button'>
            {numbers.five.label}
          </button>
          <button className='ui large basic button'>{numbers.six.label}</button>
          <button className='ui large button'>
            {calcOperations[6].subtract.label}
          </button>
        </div>
        <div className='ui segment'>
          <button className='ui large basic button'>{numbers.one.label}</button>
          <button className='ui large basic button'>{numbers.two.label}</button>
          <button className='ui large basic button'>
            {numbers.three.label}
          </button>
          <button className='ui large button'>
            {calcOperations[7].addition.label}
          </button>
        </div>
        <div className='ui segment'>
          <button className='ui large  basic button'>±</button>
          <button className='ui large basic button'>
            {numbers.zero.label}
          </button>
          <button className='ui large basic button'>•</button>
          <button className='ui large primary button'>
            {calcOperations[8].equals.label}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    displayText: state.displayText,
    calcOperations: state.calcOperations,
    numbers: state.calcNumbers
  };
};

export default connect(mapStateToProps)(PadButton);

/* const PadButton = ({
  displayText,
  onNumSelect,
  onOpSelect,
  onEquals,
  onPercentClick,
  onCancelClick,
  onClearEntry
}) => {
  return (
    <div className='ui segments'>
      <div className='ui segment'>
        <div className='ui transparent right aligned large input'>
          <input type='text' value={displayText} placeholder='0' readOnly />
        </div>
      </div>
      <div className='ui segment'>
        <button className='ui medium button' 
        </button>
        <button className='ui medium button' 
        </button>
        <button className='ui medium button' 
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
          
          {caloptions.divide.label}
        </button>
      </div>
      <div className='ui segment'>
        <button
          className='ui medium button'
          
        >
          {calcNumbers.seven.label}
        </button>
        <button
          className='ui medium button'
          
        >
          {calcNumbers.eight.label}
        </button>
        <button
          className='ui medium button'
          
        >
          {calcNumbers.nine.label}
        </button>
        <button
          className='ui medium button'
          
          {caloptions.multiply.label}
        </button>
      </div>
      <div className='ui segment'>
        <button
          className='ui medium button'
          
        >
          {calcNumbers.four.label}
        </button>
        <button
          className='ui medium button'
          
        >
          {calcNumbers.five.label}
        </button>
        <button
          className='ui medium button'
          
        >
          {calcNumbers.six.label}
        </button>
        <button
          className='ui medium button'
          
          {caloptions.subtract.label}
        </button>
      </div>
      <div className='ui segment'>
        <button
          className='ui medium button'
          
        >
          {calcNumbers.one.label}
        </button>
        <button
          className='ui medium button'
          
        >
          {calcNumbers.two.label}
        </button>
        <button
          className='ui medium button'
          
        >
          {calcNumbers.three.label}
        </button>
        <button
          className='ui medium button'
          
          {caloptions.addition.label}
        </button>
      </div>
      <div className='ui segment'>
        <button className='ui medium button'>±</button>
        <button className='ui medium button'>{calcNumbers.zero.label}</button>
        <button className='ui medium button'>.</button>
        <button className='ui medium button'>
        </button>
      </div>
    </div>
  );
}; */
