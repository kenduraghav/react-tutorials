import React from 'react';
import {
  numSelect,
  opSelect,
  evaluateExpression,
  clearExpression,
  calcPercentage
} from '../actions';
import { connect } from 'react-redux';

class PadButton extends React.Component {
  render() {
    const { calcOperations, numbers, displayText } = this.props;
    const {
      numSelect,
      opSelect,
      evaluateExpression,
      clearExpression,
      calcPercentage
    } = this.props;
    return (
      <div className='ui segments'>
        <div className='ui segment'>
          <div className='ui transparent right aligned large input'>
            <input type='text' value={displayText} placeholder='0' readOnly />
          </div>
        </div>
        <div className='ui segment'>
          <button
            className='ui  medium button'
            onClick={() => calcPercentage()}
          >
            {calcOperations.percentage.label}
          </button>
          <button
            className='ui  medium button'
            onClick={() => clearExpression()}
          >
            {calcOperations.clearEntry.label}
          </button>
          <button
            className='ui  medium button'
            onClick={() => clearExpression()}
          >
            {calcOperations.cancel.label}
          </button>
          <button className='ui  medium button'>
            {calcOperations.backspace.label}
            <i className='eraser icon'></i>
          </button>
        </div>
        <div className='ui segment'>
          <button className='ui medium button'>1/x</button>
          <button className='ui medium button'>x²</button>
          <button className='ui medium button'>²√x</button>
          <button
            className='ui medium button'
            onClick={() => opSelect(calcOperations.divide)}
          >
            {calcOperations.divide.label}
          </button>
        </div>
        <div className='ui segment'>
          <button
            className='ui large basic button'
            onClick={e => numSelect(numbers.seven.value)}
          >
            {numbers.seven.label}
          </button>
          <button
            className='ui large basic button'
            onClick={e => numSelect(numbers.eight.value)}
          >
            {numbers.eight.label}
          </button>
          <button
            className='ui large basic button'
            onClick={e => numSelect(numbers.nine.value)}
          >
            {numbers.nine.label}
          </button>
          <button
            className='ui large button'
            onClick={() => opSelect(calcOperations.multiply)}
          >
            {calcOperations.multiply.label}
          </button>
        </div>
        <div className='ui segment'>
          <button
            className='ui large basic button'
            onClick={e => numSelect(numbers.four.value)}
          >
            {numbers.four.label}
          </button>
          <button
            className='ui large basic button'
            onClick={e => numSelect(numbers.five.value)}
          >
            {numbers.five.label}
          </button>
          <button
            className='ui large basic button'
            onClick={e => numSelect(numbers.six.value)}
          >
            {numbers.six.label}
          </button>
          <button
            className='ui large button'
            onClick={() => opSelect(calcOperations.subtract)}
          >
            {calcOperations.subtract.label}
          </button>
        </div>
        <div className='ui segment'>
          <button
            className='ui large basic button'
            onClick={e => numSelect(numbers.one.value)}
          >
            {numbers.one.label}
          </button>
          <button
            className='ui large basic button'
            onClick={e => numSelect(numbers.two.value)}
          >
            {numbers.two.label}
          </button>
          <button
            className='ui large basic button'
            onClick={e => numSelect(numbers.three.value)}
          >
            {numbers.three.label}
          </button>
          <button
            className='ui large button'
            onClick={() => opSelect(calcOperations.addition)}
          >
            {calcOperations.addition.label}
          </button>
        </div>
        <div className='ui segment'>
          <button className='ui large  basic button'>±</button>
          <button className='ui large basic button'>
            {numbers.zero.label}
          </button>
          <button className='ui large basic button'>•</button>
          <button
            className='ui large primary button'
            onClick={() => evaluateExpression()}
          >
            {calcOperations.equals.label}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    calcOperations: state.calcOperations,
    numbers: state.calcNumbers,
    displayText: state.calcReducers.displayText
  };
};

export default connect(mapStateToProps, {
  numSelect,
  opSelect,
  evaluateExpression,
  clearExpression,
  calcPercentage
})(PadButton);
