import React, {ChangeEvent, useEffect, useState} from 'react';
import "./button.css";
import Button from "./components/Button";
import InputValue from "./components/InputValue";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";
import {incrementAC, decrementAC} from "./reducers/reducerForCounter";

export type CounterType = {
    countingValue: string
    counterMinValue: string
    counterMaxValue: string
}


const ButtonCounter = () => {
    let counterData = useSelector<AppRootStateType, CounterType>(state => state.counter[0])
    let counterData1 = localStorage.getItem('counterMinValue')
    let counterData2 = localStorage.getItem('counterMaxValue')

    console.log(counterData1)
    console.log(counterData2)
    let dispatch = useDispatch()
    // const getNumberValueFromLS = (key: string) => +(localStorage.getItem(key) || 0)
    // let f = localStorage.getItem('counterMinValue')

    // let [counting, setCounter] = useState<number>(getNumberValueFromLS('counterMinValue'))
    // let [minValue, setMinValue] = useState<number>(getNumberValueFromLS('counterMinValue'))
    // let [maxValue, setMaxValue] = useState<number>(getNumberValueFromLS('counterMaxValue'))
    let [error, setError] = useState<boolean>(false)

    const setStartValues = () => {
        if (counterData.counterMaxValue >= counterData.counterMinValue) {
            return dispatch(decrementAC('countSet', counterData.counterMaxValue, counterData.counterMinValue))
        }
        setError(true)
        return
    }

    useEffect(() => {
        localStorage.setItem('counterMaxValue', `${counterData.counterMaxValue}`)
        localStorage.setItem('counterMinValue', `${counterData.counterMinValue}`)
    }, [counterData.counterMaxValue, counterData.counterMinValue])

    const reset = () => {
        dispatch(incrementAC('count'))
        dispatch(incrementAC('reset'))
        setError(false)
        return

    }
    const increment = () => {
        if (counterData.counterMaxValue > counterData.countingValue) {
            dispatch(incrementAC('count'))
        } else {
            setError(true)
        }
        return
    }

    const resetError = error === true ? {
        color: 'red',
        margin: '40px 0px 60px 10px',
    } : {
        color: 'gray'
    }
    const countLimit = +counterData.countingValue <= +counterData.counterMinValue ? {
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
    const maxValueError = error ? "InputValueMaxError" : "InputValueMax"
    const minValueError = error ? "InputValueMinError" : "InputValueMin"
    const setValueError = error ? "setError" : "set"
    const setValueErrorWindow = error ? 'valeError' : 'vale'
    const valueIsMax = +counterData.countingValue >= +counterData.counterMaxValue ? {color: 'red'} : {color: '#61dafb'}
    const valueHandlerMin = (value: string) => {
        dispatch(decrementAC('countMin', value, ''))
    }
    const valueHandlerMax = (value: string) => {
        dispatch(decrementAC('countMax', value, ''))
    }
    return (
        <div style={{padding: '50px', display: "flex"}}>
            <span className='parentButton'>
                <span className="valueCounterTop">
                    <span className="subValeMax">Max value:
                    </span>
                    <InputValue
                        className={maxValueError}
                        error={error}
                        onChange={(e) => valueHandlerMax(e.currentTarget.value)}
                        value={+counterData.counterMaxValue}
                    />
                    <div>
                    </div>
                    <span className="subValeMin">Min value:
                    </span>
                    <InputValue
                        className={minValueError}
                        onChange={(e) => valueHandlerMin(e.currentTarget.value)}
                        value={+counterData.counterMinValue}
                    />
                </span>
                <div className="valueCounterButtom">
                    <Button onClick={setStartValues} className={setValueError}>set</Button>
                </div>
            </span>
            <span className='parentButton'>
                <span className="valueCounterTop">
                <span className={setValueErrorWindow} style={valueIsMax}>{counterData.countingValue}</span>
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