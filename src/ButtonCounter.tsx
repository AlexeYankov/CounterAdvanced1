import React, {useState} from 'react';
import "./button.css";
import Button from "./components/Button";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export type ButtonsType = {
    id: number
    title: string
}

type ButtonCounterType = {}

const ButtonCounter = () => {
    let [counting, setCounter] = useState<number>(0)
    let [minValue, setMinValue] = useState<number>(4)
    let [maxValue, setMaxValue] = useState<number>(8)
    let [error, setError] = useState<boolean>(false)
    let [errorMin, setErrorMin] = useState<boolean>(false)
    let [errorMax, setErrorMax] = useState<boolean>(false)
    const buttonsValue: ButtonsType[] = [
        {id: 0, title: 'set'},
        {id: 1, title: 'reset'},
        {id: 2, title: 'inc'}
    ]

    const reset = () => {
        setCounter(0)
        setError(false)
    }
    const increment1 = () => {
        if (counting < 5) {
            setCounter(counting + 1)
        } else if (counting = 5) {
            setError(true)
        } else {
        }
    }
    const incrementMax = () => {
        if (maxValue >= minValue) {
            setMaxValue(maxValue + 1)
        } else if (maxValue === minValue) {
            setError(true)
        } else {
        }
    }
    const decrementMax = () => {
        if (maxValue > minValue) {
            setMaxValue(maxValue - 1)
        } else if (maxValue === minValue) {
            setError(true)
        } else {
        }
    }
    const decrement = () => {
        if (minValue > 0) {
            setMinValue(minValue - 1)
        } else if (minValue < 0) {
            setError(true)
        } else {
        }
    }
    const resetError = error === true ? {
        // display: 'none',
        // opacity: '0.5',
        color: 'red',
        margin: '40px 0px 60px 30px',
    } : {
        color: 'gray'
    }
    const resetErrorMinMax = errorMin || errorMax ? {
        // display: 'none',
        // opacity: '0.5',
        color: 'red',
        margin: '20px 0px 30px 30px',
    } : {
        color: 'gray'
    }
    const countLimit = counting < 5 ? {
        color: 'black',
    } : {
        opacity: '0.5',
        color: 'gray',
    }
    const countLimit1 = error ? {
        color: 'gray',
        opacity: '0.0',
    } : {
        color: '#61dafb'
    }
    const resetLimit = counting ? {
        color: 'black',
        marginLeft: '140px'
    } : {
        opacity: '0.5',
        color: 'gray',
        marginLeft: '140px'
    }
    return (
        <div style={{padding: '50px', display: "flex"}}>
            <span className='parentButton'>
                <span className="valueCounterTop">
                <span className="subValeMax">Max value: {maxValue}</span>
                    <div>
                    <Button title={'inc'} className="incMxVl" onClick={incrementMax} iconStyle={<KeyboardArrowUpIcon />}></Button>
                    <Button title={'dec'} className="decMxVl" onClick={decrementMax}/>
                    </div>
                    {/*<button title={buttonsValue.[id]} onClick={incrementMax} className="incMx"></button>*/}
                    {errorMax && <div style={resetErrorMinMax}>Please set correct number</div>}
                    <span className="subValeMin">Min value: {minValue}</span>
                {/*<Button onClick={decrement} className="incMn">t</Button>*/}
                    {errorMin && <div style={resetErrorMinMax}>Please set correct number</div>}
                    </span>
                <div className="valueCounterButtom">
                <button onClick={reset} className="set">set</button>
                    </div>
            </span>
            <span className='parentButton'>
                <span className="valueCounterTop">
                <span style={countLimit1} className="vale">{counting}</span>
                    {error && <div style={resetError}>Please set correct number</div>}
                    </span>
                <div className="valueCounterButtom">
                    <button onClick={increment1} style={countLimit} className="inc">inc</button>
                    <button onClick={reset} style={resetLimit} className="reset">Reset</button>
                    </div>
            </span>
        </div>

    );
};

export default ButtonCounter;