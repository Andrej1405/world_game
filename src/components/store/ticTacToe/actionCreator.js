import { bindActionCreators } from 'redux'
import { ACTION } from './type'
import store from '../store'

const { dispatch } = store

const startGame = () => ({ type: ACTION.START_GAME })
const endGame = () => ({ type: ACTION.END_GAME })
const stepCross = idCell => ({ type: ACTION.CROSS, payload: idCell })
const stepCircle = idCell => ({ type: ACTION.CIRCLE, payload: idCell })

const actions = { startGame, endGame, stepCross, stepCircle }

export default bindActionCreators(actions, dispatch)
