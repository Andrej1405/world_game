import React, { useState, useEffect, useRef } from 'react'
import { SERVICE_VARIABLES } from './type'

import './Clock.scss'

const Clock = () => {
    const date = new Date()
    const [clock, setClock] = useState({ hour: date.getHours(), min: date.getMinutes(), sec: date.getSeconds() })
    const timerRef = useRef()

    const updateTime = () => {
        const updatingDate = new Date()

        const hour = updatingDate.getHours()
        const min = updatingDate.getMinutes()
        const sec = updatingDate.getSeconds()

        setClock({ hour, min, sec })
    }

    useEffect(() => {
        timerRef.current = setInterval(updateTime, 1000)

        return () => clearInterval(timerRef.current)
    }, [])

    const { hour, min, sec } = clock

    return (
        <div className="clock">
            <div
                className="clock__hour"
                style={{
                    transform: `rotateZ(${
                        hour * SERVICE_VARIABLES.PERCENT_ERROR +
                        (min * SERVICE_VARIABLES.PERCENT_ERROR_MM_SS) / SERVICE_VARIABLES.PERCENT_ERROR_HOUR
                    }deg)`,
                }}></div>
            <div
                className="clock__min"
                style={{ transform: `rotateZ(${min * SERVICE_VARIABLES.PERCENT_ERROR_MM_SS}deg)` }}></div>
            <div
                className="clock__sec"
                style={{ transform: `rotateZ(${sec * SERVICE_VARIABLES.PERCENT_ERROR_MM_SS}deg)` }}></div>
        </div>
    )
}

export default Clock
