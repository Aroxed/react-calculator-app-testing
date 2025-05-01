import { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('0');
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForSecondOperand) {
      setDisplay(String(digit));
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay('0.');
      setWaitingForSecondOperand(false);
      return;
    }

    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const performOperation = (nextOperator) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = calculate(firstOperand, inputValue, operator);
      setDisplay(String(result));
      setFirstOperand(result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const calculate = (firstOperand, secondOperand, operator) => {
    switch (operator) {
      case '+':
        return firstOperand + secondOperand;
      case '-':
        return firstOperand - secondOperand;
      case '*':
        return firstOperand * secondOperand;
      case '/':
        return firstOperand / secondOperand;
      default:
        return secondOperand;
    }
  };

  return (
    <div className="calculator" data-testid="calculator">
      <div className="display" data-testid="display">{display}</div>
      <div className="keypad">
        <button onClick={clearDisplay} data-testid="clear">C</button>
        <button onClick={() => inputDigit(7)} data-testid="digit-7">7</button>
        <button onClick={() => inputDigit(8)} data-testid="digit-8">8</button>
        <button onClick={() => inputDigit(9)} data-testid="digit-9">9</button>
        <button onClick={() => performOperation('/')} data-testid="operator-divide">/</button>
        <button onClick={() => inputDigit(4)} data-testid="digit-4">4</button>
        <button onClick={() => inputDigit(5)} data-testid="digit-5">5</button>
        <button onClick={() => inputDigit(6)} data-testid="digit-6">6</button>
        <button onClick={() => performOperation('*')} data-testid="operator-multiply">×</button>
        <button onClick={() => inputDigit(1)} data-testid="digit-1">1</button>
        <button onClick={() => inputDigit(2)} data-testid="digit-2">2</button>
        <button onClick={() => inputDigit(3)} data-testid="digit-3">3</button>
        <button onClick={() => performOperation('-')} data-testid="operator-subtract">-</button>
        <button onClick={() => inputDigit(0)} data-testid="digit-0">0</button>
        <button onClick={inputDecimal} data-testid="decimal">.</button>
        <button onClick={() => performOperation('+')} data-testid="operator-add">+</button>
      </div>
    </div>
  );
}

export default Calculator; 