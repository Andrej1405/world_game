import React from 'react'
import { useSelector } from 'react-redux'

const TicTacToeMenu = () => {
    const { winner, currentStep } = useSelector(state => state.ticTacToe)
    const text = winner ? `Игра завершена. Победитель: ${winner}` : `Ходит: ${currentStep}`

    return <div className="tic-tac-toe__game-header">{text}</div>
}

export default TicTacToeMenu
