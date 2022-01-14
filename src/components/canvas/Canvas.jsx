import { useEffect, useRef } from 'react'

import './Canvas.scss'

const Canvas = props => {
    const canvasRef = useRef()
    const contextRef = useRef()
    const { children, properties } = props

    useEffect(() => {
        const context = canvasRef.current.getContext('2d')

        contextRef.current = context
        console.log(contextRef)
    }, [])

    return (
        <div className="canvas">
            <canvas ref={canvasRef} width={900} height={600}>
                {children}
            </canvas>
        </div>
    )
}

export default Canvas
