import { counterReducer } from '../reducers/reducerForCounter'
import { combineReducers, legacy_createStore } from 'redux'
import {loadState, saveState} from "./localStorage";
import throttle from 'lodash/throttle';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
// const persistedState = loadState();
const rootReducer = combineReducers({
    counter: counterReducer,
})


// непосредственно создаём store
export const store = legacy_createStore(rootReducer)
// store.subscribe(throttle(() => {
//     saveState({
//         counter: store.getState().counter
//     });
// }, 1000));
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store