import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { ticTacToeReducer, arkanoidReducer } from './'

const rootReducer = combineReducers({
    ticTacToe: ticTacToeReducer,
    arkanoid: arkanoidReducer,
})
const store = createStore(rootReducer)

export default store
