import React from 'react'

import './Circle.scss'

const Circle = () => {
    return (
        <svg viewBox="0 0 120 120" className="circle">
            <circle r="50" cx="58" cy="58" stroke="blue" strokeWidth="8" fill="none" strokeLinecap="round" />
        </svg>
    )
}

export default Circle
