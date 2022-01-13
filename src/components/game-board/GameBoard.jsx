import React from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import Login from '../login/Login'
import TicTacToe from '../games/tic-tac-toe/TicTacToe'

import './GameBoard.scss'

const GameBoard = () => {
    return (
        <Box component="main" className="game-board">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/tic-tac-toe" element={<TicTacToe />} />
                <Route path="*" element={<Login />} />
            </Routes>
        </Box>
    )
}

export default GameBoard
