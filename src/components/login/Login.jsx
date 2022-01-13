import React, { useState } from 'react'
import { FormControl, Button, Input } from '@mui/material'

import './Login.scss'

const Login = () => {
    const [form, setForm] = useState({ login: '', email: '', password: '' })
    console.log(form)

    return (
        <div className="login">
            <FormControl>
                <Input
                    id="login"
                    label="1"
                    variant="outlined"
                    value={form.login}
                    sr={{ mb: 10 }}
                    required
                    onChange={e => setForm({ ...form, login: e.target.value })}
                />
                <Input
                    id="email"
                    label="1"
                    variant="outlined"
                    sr={{ mb: 10 }}
                    required
                    onChange={e => setForm({ ...form, email: e.target.value })}
                />
                <Input
                    id="password"
                    label="1"
                    variant="outlined"
                    sr={{ mb: 10 }}
                    required
                    onChange={e => setForm({ ...form, password: e.target.value })}
                />

                <Button variant="contained">Сохранить</Button>
            </FormControl>
        </div>
    )
}

export default Login
