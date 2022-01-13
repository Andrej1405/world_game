import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <>
            <nav className="navbar">
                <Button variant="contained" sx={{ mr: '10px' }} onClick={() => navigate('/')}>
                    Регистрация
                </Button>
                <Button variant="contained">Вход</Button>
            </nav>
        </>
    )
}

export default Navbar
