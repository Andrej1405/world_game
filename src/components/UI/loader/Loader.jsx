import React from 'react'

import './Loader.scss'

const Loader = () => {
    return (
        <div className="loader">
            <div className="loader__container">
                <div className="loader__ring"></div>
                <div className="loader__ring"></div>
                <div className="loader__ring"></div>
            </div>
        </div>
    )
}

export default Loader
