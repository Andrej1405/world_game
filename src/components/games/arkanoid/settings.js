import imgBall from './assets/images/star.svg'
import imgPlatform from './assets/images/ufo.png'

const dataArkanoid = {
    ball: {
        width: 40,
        height: 40,
        radius: 15,
        srcImg: imgBall,
        movement: {
            x: 0,
            y: 0,
        },
        coordinates: {
            x: 0,
            y: 0,
        },
    },

    platform: {
        width: 140,
        height: 30,
        srcImg: imgPlatform,
        movement: {
            x: 0,
            y: 0,
        },
        coordinates: {
            x: 0,
            y: 0,
        },
    },
}

export default dataArkanoid
