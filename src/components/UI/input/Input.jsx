import React, { forwardRef } from 'react'
import { TextField } from '@mui/material'

const Input = forwardRef((props, ref) => {
    return <TextField inputRef={ref} {...props} variant="outlined" margin="normal" />
})

export default Input
