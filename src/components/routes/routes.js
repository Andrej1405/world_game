import { lazy } from 'react'

import Login from '../login/Login'
import { TicTacToe } from '../games'

const Arkanoid = lazy(() => import('../games/arkanoid/Arkanoid'))

const routes = [
    { path: '/', element: <Login /> },
    { path: '/tic-tac-toe', element: <TicTacToe /> },
    { path: '/arkanoid', element: <Arkanoid /> },
    { path: '*', element: <Login /> },
]

export default routes
