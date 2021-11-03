const express = require('express')
const app = express()
const cors = require("cors")

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
}))
app.get('/', function (req, res) {
    res.send('hello world')
})

app.post("/xlsx", (req, res) => {

    res
        .header("content-disposition","asdf.xlsx").download("./output.xlsx")
})

app.listen(4000)