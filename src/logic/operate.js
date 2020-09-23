import Big from 'big.js';

export default function operate(numberOne = 0, numberTwo = 0, operation) {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  let result;
  switch (operation) {
    case 'X':
      result = num1.times(num2);
      break;
    case '÷':
      result = num1.div(num2);
      break;
    case '+':
      result = num1.plus(num2);
      break;
    case '-':
      result = num1.minus(num2);
      break;
    case '%':
      result = num1.div(Big(100));
      break;
    case '+/-':
      result = num1.div(Big(-1));
      break;
    default:
      result = 0;
      break;
  }
  return result.toPrecision();
}
