import React, { Suspense } from 'react'
import { Box } from '@mui/material'
import { Routes, Route } from 'react-router-dom'

import Loader from '../UI/loader/Loader'
import routes from '../routes/routes'

import './GameBoard.scss'

const GameBoard = () => {
    return (
        <Box component="main" className="game-board">
            <Suspense fallback={<Loader />}>
                <Routes>
                    {routes.map(route => (
                        <Route key={route.path} path={route.path} element={route.element} />
                    ))}
                </Routes>
            </Suspense>
        </Box>
    )
}

export default GameBoard
