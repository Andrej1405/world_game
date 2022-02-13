export default class Ball {
    constructor(ctx, { x, y, dx, dy, width, height, radius = 20 }) {
        this.ctx = ctx

        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.width = width
        this.height = height
        this.radius = radius
    }

    draw = imgAddr => {
        const { ctx, x, y, radius, width, height } = this

        if (imgAddr) {
            const image = new Image()
            image.src = imgAddr

            image.onload = () => ctx.drawImage(image, x, y, width, height)
            return
        }

        ctx.beginPath()
        ctx.fillStyle = '#dcf9fd'
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
        ctx.fill()

        return
    }

    move = () => {}
}
