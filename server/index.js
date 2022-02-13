const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const app = express()
const port = process.env.port || 5000

app.get('/games/all', (req, res) => {
    res.send({})
})

app.listen(port, () => console.log(`Server starting on port: ${port}`))
