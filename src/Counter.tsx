import React, {useState} from "react";

export interface CounterType {
    value: number
}

// const arr: Array<number> = [1, 2, 3];

const Counter = (props: CounterType) => {
    const [counterType, setCounterType] = useState<CounterType>(props);
    const increment = () => setCounterType(ct => ct.value < 5 ? ({ ...ct, value: ct.value + 1 }) : ct);
    const reset = () => setCounterType((ct) => ({ ...ct, value: 0 }));

    // const [counter, setCounter] = useState<number>(props.value);
    // const increment = () => setCounter(c => c < 5 ? c + 1 : c);
    // const reset = () => setCounter(() => 0);

    // const [counter, setCounter] = useState<number>(0);
    // const increment = () => setCounter(c => c < 5 ? c + 1 : c);
    // const reset = () => setCounter(() => 0);

    return (
        <div className="Counter">
            <button onClick={increment}>{counterType.value}</button>
            <button onClick={reset} disabled={counterType.value === 0}>Reset</button>
        </div>
    );
}

export default Counter;