const express = require('express')
const fs      = require('fs')
const cors    = require("cors");

const app = express()

const corsOptions = {
   origin: '*',
   credentials: true,  //access-control-allow-credentials:true
   optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

const HOSTNAME = "localhost"
const PORT = 3000

app.use(express.static(__dirname))
app.use(express.static('public'))

app.get('/', (req, res) => {
    const data = fs.readFileSync('public/pages/index.html', 'utf-8')
    res.send(data)

    console.log(`\n Request of home page \n`)
})

app.listen(PORT, HOSTNAME, () => {
    console.log(`\nServer started at ${HOSTNAME}:${PORT}\n`)
})
