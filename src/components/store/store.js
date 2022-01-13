import { createStore } from 'redux'
import { combineReducers } from 'redux'
import ticTacToeReducer from './ticTacToe/reducer'

const rootReducer = combineReducers({ ticTacToe: ticTacToeReducer })
const store = createStore(rootReducer)

export default store
