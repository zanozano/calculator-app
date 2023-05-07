import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInput = (e) => {
    const inputNum = e.target.value;
    if (isNaN(inputNum)) {
      setErrorMessage('Please enter a valid number');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      return;
    }
    if (inputNum && !operator) {
      setNum(inputNum);
      setNum1(inputNum);
    } else {
      setNum(inputNum);
      setNum2(inputNum);
    }
  };

  const handleOperator = (selectedOperator) => {
    if (!num1) {
      setErrorMessage('Please enter a number');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      return;
    }
    setOperator(selectedOperator);
  };

  const handleAddition = () => {
    handleOperator('+');
    setNum('');
  };

  const handleSubtraction = () => {
    handleOperator('-');
    setNum('');
  };

  const handleMultiplication = () => {
    handleOperator('*');
    setNum('');
  };

  const handleDivision = () => {
    handleOperator('/');
    setNum('');
  };

  const handleResult = () => {

    let res;
    switch (operator) {
      case '+':
        res = Number(num1) + Number(num2);
        break;
      case '-':
        res = Number(num1) - Number(num2);
        break;
      case '*':
        res = Number(num1) * Number(num2);
        break;
      case '/':
        res = Number(num1) / Number(num2);
        break;
      default:
        res = num;
    }
    setResult(res);
    setTimeout(() => {
      setResult('');
    }, 10000);
    setNum('');
    setNum1('');
    setNum2('');
    setOperator('');
    setErrorMessage('');
  };

  return (
    <div className="container">
      <h1>Simple Calculator</h1>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <div className="result">{result}</div>
      <div className="input-container">
        <input placeholder={!operator ? "Enter the first number" : "Enter the second number"} type="number" value={num} onChange={handleInput} />
      </div>
      <div className="button-container">
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
        <button className="result" onClick={handleResult}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
