import { ACTION, STEP, winningCombination, initialGameBoard } from './type'
import Cross from '../../games/tic-tac-toe/cross/Cross'
import Circle from '../../games/tic-tac-toe/circle/Circle'

import { equal } from '../../../utils/utils'

const initialState = {
    isStart: false,
    currentStep: ACTION.CROSS,
    currentPlayer: '',
    winner: null,
    gameBoard: initialGameBoard,
}

const ticTacToeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION.START_GAME:
            return { ...state, isStart: true, gameBoard: initialGameBoard }
        case ACTION.END_GAME:
            return { ...state, isStart: false, winner: '' }
        case ACTION.CIRCLE:
            const gameBoardByStepCircle = playerStep(state.gameBoard, action.payload, STEP.CIRCLE, <Circle />)
            const winnerCircle = checkWinning(gameBoardByStepCircle, STEP.CIRCLE)

            return {
                ...state,
                currentStep: ACTION.CROSS,
                winner: winnerCircle,
                gameBoard: gameBoardByStepCircle,
            }
        case ACTION.CROSS:
            const gameBoardByStepCross = playerStep(state.gameBoard, action.payload, STEP.CROSS, <Cross />)
            const winnerCross = checkWinning(gameBoardByStepCross, STEP.CROSS)

            return {
                ...state,
                currentStep: ACTION.CIRCLE,
                winner: winnerCross,
                gameBoard: gameBoardByStepCross,
            }
        default:
            return state
    }
}

const playerStep = (gameBoard, id, step, component) => {
    return gameBoard.map(cell => {
        if (equal(cell.id, id)) return { id, step, isFilled: true, value: component }
        return cell
    })
}

/*
 * TODO: сделать логику элегантнее
 */
const checkWinning = (gameBoard, stepPlayer) => {
    const NEED_MATCHES = 3

    for (let winCombination of winningCombination) {
        const [idCell1, idCell2, idCell3] = winCombination
        let counterMatches = 0

        for (const cell of gameBoard) {
            if (
                (equal(cell.id, idCell1) || equal(cell.id, idCell2) || equal(cell.id, idCell3)) &&
                cell.step === stepPlayer
            )
                counterMatches++
        }

        if (equal(counterMatches, NEED_MATCHES)) {
            for (const cell of gameBoard) {
                if (equal(cell.id, idCell1) || equal(cell.id, idCell2) || equal(cell.id, idCell3)) cell.isWinning = true
            }

            return stepPlayer
        }
    }

    return null
}

export default ticTacToeReducer
