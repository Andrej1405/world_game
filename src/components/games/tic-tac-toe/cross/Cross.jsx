import React from 'react'
import './Cross.scss'

const Cross = () => {
    return (
        <svg viewBox="0 0 120 120" className="cross">
            <line
                className="first-line"
                x1="110"
                y1="11"
                x2="10"
                y2="110"
                stroke="red"
                strokeWidth="8"
                strokeLinecap="round"
            />
            <line
                className="second-line"
                x1="110"
                y1="110"
                x2="10"
                y2="10"
                stroke="red"
                strokeWidth="8"
                strokeLinecap="round"
            />
        </svg>
    )
}

export default Cross
