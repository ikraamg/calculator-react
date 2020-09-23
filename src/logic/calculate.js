import operate from './operate';

export default function calculate(
  data = {
    total: '',
    next: '',
    operation: '',
  },
  buttonName,
) {
  let { total, next } = data;

  if (buttonName === '+/-') {
    next *= -1;
    total *= -1;
    return next;
  }

  return operate(total, next, buttonName);
}
