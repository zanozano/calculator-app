import React from 'react'
import './css/style.css'
export const Calculator = () => {
    return (
        <div className='container'>
            <div className='container__glass'>
                <div className='container__screen'>
                    <p className='container__value'>200</p>
                </div>
            </div>
            <div className='btn-block'>
                <div className='btn-block__btn btn--orange'>
                    ON
                </div>
                <div className='btn-block__btn btn--black'>
                    MC
                </div>
                <div className='btn-block__btn btn--black'>
                    M+
                </div>
                <div className='btn-block__btn btn--blue'>
                    %
                </div>
                <div className='btn-block__btn btn--grey'>
                    7
                </div>
                <div className='btn-block__btn btn--grey'>
                    8
                </div>
                <div className='btn-block__btn btn--grey'>
                    9
                </div>
                <div className='btn-block__btn btn--blue'>
                    ÷
                </div>
                <div className='btn-block__btn btn--grey'>
                    4
                </div>
                <div className='btn-block__btn btn--grey'>
                    5
                </div>
                <div className='btn-block__btn btn--grey'>
                    6
                </div>
                <div className='btn-block__btn btn--blue'>                    X
                </div>
                <div className='btn-block__btn btn--grey'>
                    1
                </div>
                <div className='btn-block__btn btn--grey'>
                    2
                </div>
                <div className='btn-block__btn btn--grey'>
                    3
                </div>
                <div className='btn-block__btn btn--blue'>
                    -
                </div>
                <div className='btn-block__btn btn--grey'>
                    0
                </div>
                <div className='btn-block__btn btn--grey'>
                    .
                </div>
                <div className='btn-block__btn btn--orange'>
                    =
                </div>
                <div className='btn-block__btn btn--blue'>
                    +
                </div>
            </div>
        </div>
    )
}
