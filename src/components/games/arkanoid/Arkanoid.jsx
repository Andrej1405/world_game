import { connect } from 'react-redux'
import Canvas from '../../canvas/Canvas'

import './Arkanoid.scss'

const Arkanoid = ({ isStart }) => {
    return (
        <section className="arkanoid">
            <Canvas />
        </section>
    )
}

const mapStateToProps = state => {
    const { isStart } = state

    return { isStart }
}

export default connect(mapStateToProps)(Arkanoid)
