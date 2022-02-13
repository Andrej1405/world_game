export default class Platform {
    constructor(ctx, params) {
        const { x, y, dx, dy, width, height } = params

        this.ctx = ctx
        this.x = x
        this.y = y
        this.dx = dx
        this.dy = dy
        this.width = width
        this.height = height
    }

    draw = imgAddr => {
        const { ctx, x, y, width, height } = this

        if (imgAddr) {
            const image = new Image()
            image.src = imgAddr

            image.onload = () => ctx.drawImage(image, x, y, width, height)

            return
        }

        ctx.fillStyle = '#dcf9fd'
        ctx.fillRect(x, y, width, height)

        return
    }

    move = () => {}
}
