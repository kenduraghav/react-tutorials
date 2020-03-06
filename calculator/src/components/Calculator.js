import React from 'react';
import PadButton from './Padbutton';
import ResultView from './ResultView';
import { connect } from 'react-redux';
import './calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className='ui cards'>
        <div className='ui card'>
          <PadButton />
        </div>
        <div className='ui card'>
          <ResultView />
        </div>
      </div>
    );
  }
}

/* class Calculator extends React.Component {
  state = {
    displayText: '0',
    output: '0',
    op: ''
  };

  handlePadInput = (e, selNum) => {
    e.preventDefault();
    this.setState({
      input: selNum
    });
  };

  handleNumSelect = (e, numvalue) => {
    e.preventDefault();
    let displayText =
      this.state.displayText === '0'
        ? this.state.displayText.replace('0', '') + numvalue
        : this.state.displayText + numvalue;
    this.setState({
      displayText: displayText
    });
  };

  handleOpSelect = (e, op) => {
    e.preventDefault();
    let displayText = this.state.displayText + op.label;
    this.setState({
      displayText: displayText,
      op: op
    });
  };

  handleEquals = e => {
    e.preventDefault();
    let op = this.state.op;
    let operands = this.state.displayText.split(op.label);
    let num1 = parseFloat(operands[0]);
    let num2 = parseFloat(operands[1]);
    let result = 0;
    switch (op.label) {
      case '+':
        result =
          this.state.output === '0' ? num1 + num2 : this.state.output + num2;
        break;
      case '-':
        result =
          this.state.output === '0' ? num1 - num2 : this.state.output - num2;
        break;
      case '*':
        result =
          this.state.output === '0' ? num1 * num2 : this.state.output * num2;
        break;
      case '/':
        result =
          this.state.output === '0' ? num1 / num2 : this.state.output / num2;
        break;
      default:
        result = 0;
        break;
    }
    this.setState({
      output: result
    });
  };

  handleClearEntry = e => {
    //TODO: handle clearing last entry;
    e.preventDefault();
    this.setState({
      displayText: '',
      output: '0',
      op: ''
    });
  };

  handleCancelOperation = e => {
    //TODO:  handle clearing all inputs;
    e.preventDefault();
    this.setState({
      displayText: '',
      output: '0',
      op: ''
    });
  };

  calculatePercentage = e => {
    e.preventDefault();
    let input = this.state.displayText;
    let op = this.state.op.label;
    let value = input.split(op);
    let result = parseFloat(value) / 100;
    this.setState({
      output: result
    });
  };

  render() {
    return (
      <div className='ui cards'>
        <div className='ui card'>
          <PadButton
            displayText={this.state.displayText}
            onNumSelect={this.handleNumSelect}
            onOpSelect={this.handleOpSelect}
            onEquals={this.handleEquals}
            onPercentClick={this.calculatePercentage}
            onCancelClick={this.handleCancelOperation}
            onClearEntry={this.handleClearEntry}
          />
        </div>
        <div className='ui card'>
          <ResultView output={this.state.output} />
        </div>
      </div>
    );
  }
} */
const mapStateToProps = state => {
  return {
    displayText: state.displayText,
    output: state.output,
    op: state.op
  };
};
export default connect(mapStateToProps)(Calculator);
