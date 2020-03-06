//Action creator
export const numSelect = numvalue => {
  return { type: 'NUM_SELECT', payload: { numval: numvalue } };
};

export const opSelect = operation => {
  return { type: 'OP_SELECT', payload: operation };
};

export const evaluateExpression = () => {
  return { type: 'EVAL_EXPR' };
};

export const clearExpression = () => {
  return { type: 'CLEAR_ALL' };
};

export const calcPercentage = () => {
  return { type: 'PERCENTAGE' };
};
