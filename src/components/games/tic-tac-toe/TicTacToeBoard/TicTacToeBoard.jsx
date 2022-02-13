import React from 'react'
import { useSelector } from 'react-redux'

import Cell from '../../../cell/Cell'
import { ACTION } from '../../../store/ticTacToe/type'
import actions from '../../../store/ticTacToe/actionCreator'

const TicTacToeBoard = () => {
    const { gameBoard, winner, currentStep, isStart } = useSelector(state => state.ticTacToe)
    const { stepCross, stepCircle } = actions
    const classes = `tic-tac-toe__game tic-tac-toe__game_${isStart ? 'on' : 'off'}`
    const playerTurn = ({ target }) => (currentStep === ACTION.CROSS ? stepCross(target.id) : stepCircle(target.id))

    return (
        <div className={classes}>
            {gameBoard.map(cell => {
                const { id, value, isFilled, isWinning } = cell
                const action = isStart && !isFilled && !winner ? playerTurn : null

                return (
                    <Cell id={id} key={id} action={action} isSpecialCell={isWinning}>
                        {value}
                    </Cell>
                )
            })}
        </div>
    )
}

export default TicTacToeBoard
