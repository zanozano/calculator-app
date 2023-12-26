import { useState } from 'react';

export function useMathOperations() {
    const [calculate, setCalculate] = useState([]);
    const [value, setValue] = useState('');

    const number = (newValue) => {
        if (value.length < 8) {
            if (value === '0' && value.length === 1) {
                setValue(String(newValue));
            } else {
                setValue((prevValue) => prevValue + String(newValue));
            }
        }
    };

    const dot = () => {
        if (!value.includes('.')) {
            setValue((prevValue) => prevValue + '.');
        }
    };

    const add = (digit) => {
        if (value.length > 0) {
            setCalculate((oldValue) => {
                const lastValue = value[value.length - 1];
                if (digit === '+' && ['+'].includes(lastValue)) {
                    return oldValue;
                } else {
                    return [...oldValue, value, digit];
                }
            });
            setValue('');
        }
    };

    const subtract = (digit) => {
        if (value.length > 0) {
            setCalculate((oldValue) => {
                const lastValue = value[value.length - 1];
                if (digit === '-' && ['-'].includes(lastValue)) {
                    return oldValue;
                } else {
                    return [...oldValue, value, digit];
                }
            });
            setValue('');
        }
    };

    const multiply = (digit) => {
        if (value.length > 0) {
            setCalculate((oldValue) => {
                const lastValue = value[value.length - 1];
                if (digit === 'x' && ['*'].includes(lastValue)) {
                    return oldValue;
                } else {
                    return [...oldValue, value, '*'];
                }
            });
            setValue('');
        }
    };


    const divide = (digit) => {
        if (value.length > 0) {
            setCalculate((oldValue) => {
                const lastValue = value[value.length - 1];
                if (digit === '÷' && ['/'].includes(lastValue)) {
                    return oldValue;
                } else {
                    return [...oldValue, value, '/'];
                }
            });
            setValue('');
        }
    };

    const modulo = (digit) => {
        if (value.length > 0) {
            setCalculate((oldValue) => {
                const lastValue = value[value.length - 1];
                if (digit === '%' && ['%'].includes(lastValue)) {
                    return oldValue;
                } else {
                    return [...oldValue, value, '%'];
                }
            });
            setValue('');
        }
    };

    const showResult = () => {

        const newArray = [...calculate, value];
        let result = 0;
        let currentOperation = '+';

        for (let value of newArray) {
            if (isNaN(Number(value))) {
                currentOperation = value;
            } else {
                switch (currentOperation) {
                    case '+':
                        result += Number(value);
                        break;
                    case '-':
                        result -= Number(value);
                        break;
                    case '*':
                        result *= Number(value);
                        break;
                    case '/':
                        result /= Number(value);
                        break;
                    case '%':
                        result %= Number(value);
                        break;
                    default:
                        console.error('Unrecognized operation:', currentOperation);
                        break;
                }
            }
        }
        setCalculate([])
        setValue(String(result));
    };

    const reset = () => {
        setCalculate([]);
        setValue('');
    };

    return {
        value,
        calculate,
        number,
        reset,
        dot,
        add,
        showResult,
        subtract,
        multiply,
        divide,
        modulo,
    };
}

