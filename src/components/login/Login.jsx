import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import Input from '../UI/input/Input'
import Button from '../UI/button/Button'

import './Login.scss'

const Login = () => {
    const [form, setForm] = useState({ login: '', email: '', password: '' })
    const { register, handleSubmit, reset, errors } = useForm({
        mode: 'onBlur',
    })

    const onSubmit = data => {
        reset()
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register('login')} id="login" label="Логин" type="text" />
                <Input {...register('firstName')} id="firstName" label="Имя" type="text" />
                <Input {...register('email')} id="email" label="Почта" type="text" />

                <Button variant="contained" type="reset">
                    Отменить
                </Button>
                <Button variant="contained" type="submit" onClick={onSubmit}>
                    Подтвердить
                </Button>
            </form>
        </div>
    )
}

export default Login
