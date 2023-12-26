import { useState } from 'react';

export function useMathOperations() {

    const [value, setValue] = useState();
    const [result, setResult] = useState();
    const [calculate, setCalculate] = useState([])

    const number = (newValue) => {
        setValue((prevValue) => {
            const combinedValue = `${prevValue || ''}${newValue}`;
            const truncatedValue = combinedValue.slice(0, 8);
            return truncatedValue;
        });
    };

    const reset = () => {
        setCalculate([]);
        setResult();
        setValue();
    };

    return {
        number,
        reset,
        value,
        number,
        reset,
    };
}

