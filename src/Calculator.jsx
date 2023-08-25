import React, { useState } from 'react';
import './css/style.css'
export const Calculator = () => {

    const [digits, setDigits] = useState('');

    const buttons = [
        { digit: 'ON', className: 'btn--orange' },
        { digit: 'MC', className: 'btn--black' },
        { digit: 'M+', className: 'btn--black' },
        { digit: '%', className: 'btn--blue' },
        { digit: 7, className: 'btn--grey' },
        { digit: 8, className: 'btn--grey' },
        { digit: 9, className: 'btn--grey' },
        { digit: '÷', className: 'btn--blue' },
        { digit: 4, className: 'btn--grey' },
        { digit: 5, className: 'btn--grey' },
        { digit: 6, className: 'btn--grey' },
        { digit: 'X', className: 'btn--blue' },
        { digit: 1, className: 'btn--grey' },
        { digit: 2, className: 'btn--grey' },
        { digit: 3, className: 'btn--grey' },
        { digit: '-', className: 'btn--blue' },
        { digit: 0, className: 'btn--grey' },
        { digit: '.', className: 'btn--grey' },
        { digit: '=', className: 'btn--orange' },
        { digit: '+', className: 'btn--blue' },
    ];

    const handleButtonClick = ({ digit }) => {

        if (typeof digit === 'number') {
            setDigits((prevInput) => prevInput + digit);
        }
        if (digit === '+') {
            setDigits('')
            setDigits((prevInput) => prevInput + digit);
        }
        if (digit === '-') {
            setDigits('')
            setDigits((prevInput) => prevInput + digit);
        }
        if (digit === '/') {
            setDigits('')
            setDigits((prevInput) => prevInput + digit);
        }
        if (digit === '%') {
            setDigits('')
            setDigits((prevInput) => prevInput + digit);
        }
    };


    return (
        <div className='container'>
            <div className='container__glass'>
                <div className='container__screen'>
                    <p className='container__value'>
                        {digits}
                    </p>
                </div>
            </div>
            <div className='btn-block'>
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className={`btn-block__btn ${button.className}`}
                        onClick={() => handleButtonClick(button)}
                    >
                        {button.digit}
                    </button>
                ))}
            </div>
        </div>
    )
}
