import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@mui/material'

import actions from '../../../store/ticTacToe/actionCreator'

const TicTacToeHeader = () => {
    const { isStart } = useSelector(state => state.ticTacToe)
    const { startGame, endGame } = actions
    const action = isStart ? endGame : startGame
    const textButton = isStart ? 'Завершить игру' : 'Начать игру'

    return (
        <header className="tic-tac-toe__header">
            <Button onClick={action} className="tic-tac-toe__btn-start" variant="contained">
                {textButton}
            </Button>
        </header>
    )
}

export default TicTacToeHeader
