import React from 'react'
import Navbar from '../navbar/Navbar'
import Logo from '../logo/Logo'
import Clock from '../UI/clock/Clock'
import Select from '../UI/select/Select'

import './Header.scss'

const Header = ({ options }) => {
    return (
        <header className="header">
            <Clock />
            <div className="header__game">
                <Logo />
                <Select options={options} />
            </div>
            <Navbar />
        </header>
    )
}

Header.defaultProps = {
    options: [
        { id: 0, value: 'Крестики-нолики', path: '/tic-tac-toe' },
        { id: 1, value: 'Арканоид', path: '/arkanoid' },
    ],
}

export default Header
