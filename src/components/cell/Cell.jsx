import React from 'react'

import './Cell.scss'

const Cell = ({ id, action, isSpecialCell, children }) => {
    const classes = isSpecialCell ? 'cell cell_win' : 'cell'

    return (
        <div id={id} className={classes} onClick={action}>
            {children}
        </div>
    )
}

export default Cell
