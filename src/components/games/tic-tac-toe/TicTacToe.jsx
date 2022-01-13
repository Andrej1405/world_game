import React from 'react'
import { connect } from 'react-redux'
import { Button } from '@mui/material'
import Cell from '../../cell/Cell'
import actions from '../../store/ticTacToe/actionCreator'
import { ACTION } from '../../store/ticTacToe/type'

import './TicTacToe.scss'

const TicTacToe = ({ isStart, currentStep, winner, gameBoard, startGame, endGame, stepCross, stepCircle }) => {
    const turnPlayer = ({ target }) => {
        const { id } = target
        currentStep === ACTION.CROSS ? stepCross(id) : stepCircle(id)
    }

    return (
        <div className="tic-tac-toe">
            {isStart ? (
                <>
                    <header className="tic-tac-toe__header">
                        <Button onClick={endGame} className="tic-tac-toe__btn-start" variant="contained">
                            Завершить игру
                        </Button>
                    </header>
                    <div className="tic-tac-toe__game-header">
                        {winner ? `Игра завершена. Победитель: ${winner}` : `Ходит: ${currentStep}`}
                    </div>
                    <div className="tic-tac-toe__game tic-tac-toe__game_on">
                        {gameBoard.map(cell => {
                            const { id, value, isFilled, isWinning } = cell

                            return (
                                <Cell
                                    id={id}
                                    key={cell.id}
                                    turnPlayer={isFilled || winner ? null : turnPlayer}
                                    isSpecialCell={isWinning}>
                                    {value}
                                </Cell>
                            )
                        })}
                    </div>
                </>
            ) : (
                <>
                    <header className="tic-tac-toe__header">
                        <Button onClick={startGame} className="tic-tac-toe__btn-start" variant="contained">
                            Начать игру
                        </Button>
                    </header>
                    <div className="tic-tac-toe__game tic-tac-toe__game_off">
                        {gameBoard.map(cell => {
                            const { id } = cell

                            return <Cell id={id} key={id} />
                        })}
                    </div>
                </>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    const { ticTacToe } = state
    const { isStart, currentStep, winner, gameBoard } = ticTacToe

    return { isStart, currentStep, winner, gameBoard }
}

export default connect(mapStateToProps, actions)(TicTacToe)
