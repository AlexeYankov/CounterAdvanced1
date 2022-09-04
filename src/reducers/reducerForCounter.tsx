import {CounterType} from "../ButtonCounter";

let initialState: CounterType[] = [{
    countingValue: '0',
    counterMinValue: '0',
    counterMaxValue: '0',
}]


export const counterReducer = (state = initialState, action: ReduceCounterType): CounterType[] => { // need to fix any
    switch (action.type) {
        case 'counting-value': {
            if (action.payload.title === 'count') {
                let startState = state[0].countingValue
                let newStateValue = +startState + 1
                return state.map(el => el.countingValue ? {...el, countingValue: String(newStateValue)} : el)
            }
            if (action.payload.title === 'reset') {
                let startNewState = state[0].counterMinValue
                return state.map(el => el.countingValue ? {...el, countingValue: startNewState} : el)
            }
            return [...state]
        }
        case 'counting-config': {
            if (action.payload.minTitle === 'countMin') {
                let startState = state[0].counterMinValue
                startState = action.payload.value
                return state.map(el => el.counterMinValue ? {...el, counterMinValue: startState} : el)
            }
            if (action.payload.minTitle === 'countMax') {
                let newStateValue = action.payload.value
                return state.map(el => el.counterMaxValue ? {...el, counterMaxValue: String(newStateValue)} : el)
            }
            if (action.payload.minTitle === 'countSet') {
                // state.map(el => el.counterMinValue ? {...el, countingValue: action.payload.value1} : el)
                // state.map(el => el.counterMaxValue ? {...el, counterMaxValue: action.payload.value} : el)
                return state.map(el => el.countingValue ? {...el, countingValue: action.payload.value1} : el)
            }
            return [...state]
        }

        default:
            return state

    }
}

export type ReduceCounterType = IncrementACType | DecrementACType

type  IncrementACType = ReturnType<typeof incrementAC>
export const incrementAC = (title:string) => {
    return {
        type: 'counting-value',
        payload: {
            title
        }
    } as const
}
type  DecrementACType = ReturnType<typeof decrementAC>
export const decrementAC = (minTitle: string, value: string, value1: string) => {
    return {
        type: 'counting-config',
        payload: {
            minTitle,
            value,
            value1

        }
    } as const
}