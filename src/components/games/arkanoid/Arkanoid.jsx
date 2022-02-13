import { useEffect, useRef, useCallback } from 'react'
import { connect } from 'react-redux'

import Ball from './elements/ball/Ball'
import Platform from './elements/platform/Platform'
import dataArkanoid from './settings'

import './Arkanoid.scss'

const Arkanoid = ({ isStart }) => {
    const canvasRef = useRef(null)
    const contextRef = useRef(null)

    const keyDown = useCallback(e => {}, [])
    const keyUp = useCallback(e => {}, [])

    const initUnits = () => {
        const { ball, platform } = dataArkanoid
        const { width: widthBall, height: heightBall, radius } = ball
        const { width: widthPlatform, height: heightPlatform, srcImg: imgPlatform } = platform

        new Ball(contextRef.current, {
            x: canvasRef.current.width / 2,
            y: canvasRef.current.height - 85,
            width: widthBall,
            height: heightBall,
            radius,
        }).draw()

        new Platform(contextRef.current, {
            x: canvasRef.current.width / 2 - 68,
            y: canvasRef.current.height - 65,
            width: widthPlatform,
            height: heightPlatform,
        }).draw(imgPlatform)
    }

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        contextRef.current = context
        initUnits()

        document.addEventListener('keydown', keyDown)
        document.addEventListener('keydown', keyUp)

        return () => {
            document.removeEventListener('keydown', keyDown)
            document.removeEventListener('keydown', keyUp)
        }
    }, [])

    return (
        <section className="arkanoid">
            <canvas className="back" width={900} height={600}></canvas>
            <canvas className="front" ref={canvasRef} width={900} height={600}>
                Ваш браузер не поддерживает эту функциональность...
            </canvas>
        </section>
    )
}

const mapStateToProps = state => {
    const { isStart } = state

    return { isStart }
}

export default connect(mapStateToProps)(Arkanoid)
