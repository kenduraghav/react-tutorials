import { combineReducers } from 'redux';

let initialState = {
  displayText: '0',
  outputText: '0',
  op: ''
};

const calcOperationReducer = () => {
  return {
    percentage: { label: '%', operation: 'percentage', isSelected: false },
    clearEntry: { label: 'CE', operation: 'clear', isSelected: false },
    cancel: { label: 'C', operation: 'cancel', isSelected: false },
    backspace: { label: '', operation: 'backspace', isSelected: false },
    divide: { label: '/', operation: 'divide', isSelected: false },
    multiply: { label: '*', operation: 'multiply', isSelected: false },
    subtract: { label: '-', operation: 'subtract', isSelected: false },
    addition: { label: '+', operation: 'add', isSelected: false },
    equals: { label: '=', operation: 'eval', isSelected: false }
  };
};

const calcNumReducer = () => {
  return {
    one: { label: '1', value: 1, isSelected: false },
    two: { label: '2', value: 2, isSelected: false },
    three: { label: '3', value: 3, isSelected: false },
    four: { label: '4', value: 4, isSelected: false },
    five: { label: '5', value: 5, isSelected: false },
    six: { label: '6', value: 6, isSelected: false },
    seven: { label: '7', value: 7, isSelected: false },
    eight: { label: '8', value: 8, isSelected: false },
    nine: { label: '9', value: 9, isSelected: false },
    zero: { label: '0', value: 0, isSelected: false }
  };
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NUM_SELECT':
      const { numval } = action.payload;
      return handleNumSelect(state, numval);
    case 'OP_SELECT':
      const operation = action.payload;
      return handleOpSelect(state, operation);
    case 'EVAL_EXPR':
      return evaluate(state);
    case 'CLEAR_ALL':
      return Object.assign({}, state, initialState);
    case 'PERCENTAGE':
      return calcPercentage(state);
    default:
      return state;
  }
};

export default combineReducers({
  calcOperations: calcOperationReducer,
  calcNumbers: calcNumReducer,
  calcReducers: calculatorReducer
});

function calcPercentage(state) {
  let { displayText, op } = state;
  let label = op.label;
  let value = displayText.split(label);
  let result = parseFloat(value) / 100;
  return Object.assign({}, state, { outputText: result });
}

function evaluate(state) {
  let { displayText, outputText, op } = state;
  let operands = displayText.split(op.label);
  let num1 = parseFloat(operands[0]);
  let num2 = parseFloat(operands[1] ? operands[1] : outputText);
  let result = 0;
  switch (op.label) {
    case '+':
      result = outputText === '0' ? num1 + num2 : outputText + num2;
      break;
    case '-':
      result = outputText === '0' ? num1 - num2 : outputText - num2;
      break;
    case '*':
      result = outputText === '0' ? num1 * num2 : outputText * num2;
      break;
    case '/':
      result = outputText === '0' ? num1 / num2 : outputText / num2;
      break;
    default:
      result = 0;
      break;
  }
  return Object.assign({}, state, { outputText: result });
}

function handleOpSelect(state, operation) {
  let displayText = state.displayText + operation.label;
  return Object.assign({}, state, {
    displayText: displayText,
    op: operation
  });
}

function handleNumSelect(state, numval) {
  let text =
    state.displayText === '0'
      ? state.displayText.replace('0', '') + numval
      : state.displayText + numval;
  return Object.assign({}, state, { displayText: text });
}
