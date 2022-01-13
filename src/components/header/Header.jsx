import React from 'react'
import Navbar from '../navbar/Navbar'
import Logo from '../logo/Logo'
import Clock from '../UI/clock/Clock'
import Select from '../UI/select/Select'

import { options } from '../testInfo' // test!
import './Header.scss'

const Header = () => {
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

export default Header
