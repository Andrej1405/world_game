import React from 'react'

import './Cell.scss'

const Cell = ({ id, turnPlayer, isSpecialCell, children }) => {
    const classes = isSpecialCell ? 'cell cell_win' : 'cell'

    return (
        <div id={id} className={classes} onClick={turnPlayer || null}>
            {children}
        </div>
    )
}

export default Cell
