import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { ticTacToeReducer, arkanoidReducer } from './'

const rootReducer = combineReducers({
    ticTacToe: ticTacToeReducer,
    arkanoid: arkanoidReducer,
})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
