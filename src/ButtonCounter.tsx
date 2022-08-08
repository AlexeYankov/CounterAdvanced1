import React, {useEffect, useState} from 'react';
import "./button.css";
import Button from "./components/Button";
import InputValue from "./components/InputValue";

const ButtonCounter = () => {
    const getNumberValueFromLS = (key: string) => +(localStorage.getItem(key) || 0)
    let [counting, setCounter] = useState<number>(getNumberValueFromLS('counterMinValue'))
    let [minValue, setMinValue] = useState<number>(getNumberValueFromLS('counterMinValue'))
    let [maxValue, setMaxValue] = useState<number>(getNumberValueFromLS('counterMaxValue'))
    let [error, setError] = useState<boolean>(false)

    const setStartValues = () => {
        if (maxValue >= minValue) {
            setCounter(minValue)
            setMaxValue(maxValue)
            return
        }
        setError(true)
        return
    }

    useEffect(() => {
        localStorage.setItem('counterMinValue', `${minValue}`)
        localStorage.setItem('counterMaxValue', `${maxValue}`)
    }, [minValue, maxValue])

    const reset = () => {
        setCounter(minValue)
        setError(false)
    }
    const increment = () => {
        if (counting < maxValue) {
            setCounter(counting + 1)
        } else if (counting <= maxValue) {
            setError(true)
        } else {
        }
    }

    const resetError = error === true ? {
        color: 'red',
        margin: '40px 0px 60px 10px',
    } : {
        color: 'gray'
    }
    const countLimit = counting <= minValue ? {
        color: 'black',
        opacity: '0.5'
    } : {
        color: 'black',
    }
    const countLimit1 = error ? {
        color: 'black',
        opacity: '0.5'
    } : {
        color: 'black',
    }
    const maxValueError = error ? "InputValueMaxError": "InputValueMax"
    const minValueError = error ? "InputValueMinError": "InputValueMin"
    const setValueError = error ? "setError": "set"
    const setValueErrorWindow = error ? 'valeError' : 'vale'
    const valueIsMax = counting >= maxValue ? {color: 'red'} : {color: '#61dafb'}

    return (
        <div style={{padding: '50px', display: "flex"}}>
            <span className='parentButton'>
                <span className="valueCounterTop">
                    <span className="subValeMax">Max value:
                    </span>
                    <InputValue
                        className={maxValueError}
                        error={error}
                        setValue={setMaxValue}
                        value={maxValue}
                    />
                    <div>
                    </div>
                    <span className="subValeMin">Min value:
                    </span>
                    <InputValue
                        className={minValueError}
                        setValue={setMinValue}
                        value={minValue}
                    />
                </span>
                <div className="valueCounterButtom">
                    <Button onClick={setStartValues} className={setValueError}>set</Button>
                </div>
            </span>
            <span className='parentButton'>
                <span className="valueCounterTop">
                <span className={setValueErrorWindow} style={valueIsMax}>{counting}</span>
                    {error && <div style={resetError}>Please set correct number</div>}
                    </span>
                <div className="valueCounterButtom">
                    <Button onClick={increment} style={countLimit1} className="inc">inc</Button>
                    <Button onClick={reset} style={countLimit} className="reset">Reset</Button>
                    </div>
            </span>
        </div>

    );
};

export default ButtonCounter;