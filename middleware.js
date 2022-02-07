const express = require('express')
const app = express()
const port = 3000

//middlewware
app.use((req, res, next) => {
    console.log("yeah this is middleware console logging. hahaha");
    next();
})

app.get('/', (req, res) => {
    const user = {
        name: 'fordy',
        hobby: 'playing guitar'
    }
    res.send(user)
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})