import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Select as MUISelect, MenuItem } from '@mui/material'

import './Select.scss'

const Select = ({ options }) => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const selectChange = ({ target }) => {
    const { value } = target

    setValue(value)
    navigate(value)
  }

  return (
    <MUISelect className="select" value={value} onChange={selectChange}>
      {options.map(option => {
        const { id, value, path } = option

        return (
          <MenuItem key={id} value={path}>
            {value}
          </MenuItem>
        )
      })}
    </MUISelect>
  )
}

export default Select
