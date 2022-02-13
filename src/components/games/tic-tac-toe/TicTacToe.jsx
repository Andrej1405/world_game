import React from 'react'

import TicTacToeHeader from './TicTacToeHeader/TicTacToeHeader'
import TicTacToeMenu from './TicTacToeMenu/TicTacToeMenu'
import TicTacToeBoard from './TicTacToeBoard/TicTacToeBoard'

import './TicTacToe.scss'

const TicTacToe = () => {
    return (
        <section className="tic-tac-toe">
            <TicTacToeHeader />
            <TicTacToeMenu />
            <TicTacToeBoard />
        </section>
    )
}

export default TicTacToe
