import operate from './operate';

export default function calculate(data, buttonName) {
  const { total, next, operation } = data;
  const operatorList = ['+', '-', 'X', '÷'];
  const numberList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
  const modifierList = ['%', '+/-'];

  // Clear display
  if (buttonName === 'AC' || total === 'NaN') {
    return { total: '', next: '', operation: '' };
  }

  try {
  // Operation cases where all variables are filled
    if (total !== '' && next !== '' && operation !== '') {
      if (buttonName === '=') {
        return { total: operate(total, next, operation), next: '', operation: '' };
      }
      if (operatorList.includes(buttonName)) {
        return { total: operate(total, next, operation), next: '', operation: buttonName };
      }
      if (modifierList.includes(buttonName)) {
        return { total: operate(total, 0, buttonName), next: '', operation: '' };
      }
    }

    // Ignore '=' when not used above
    if (buttonName === '=') {
      return { total, next, operation };
    }

    // Operate for modifiers
    if (modifierList.includes(buttonName) && total !== '' && next === '') {
      return { total: operate(total, 0, buttonName), next: '', operation: '' };
    }
  } catch (err) {
    return { total: 'NaN', next: '', operation: '' };
  }

  // return next number digits
  if (total !== '' && operation !== '' && !modifierList.includes(buttonName) && !operatorList.includes(buttonName)) {
    return { total, next: next + buttonName, operation };
  }

  // return operator
  if (operatorList.includes(buttonName) && total !== '') {
    return { total, next, operation: buttonName };
  }

  // return total number digits and check for double '.'
  if (numberList.includes(buttonName) && !operatorList.includes(buttonName)) {
    if (buttonName === '.' && total.includes('.')) {
      return { total, next, operation };
    }
    return { total: total + buttonName, next, operation };
  }
  return { total, next, operation };
}
