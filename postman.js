const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("getting root")
})

app.get('/profile', (req, res) => {
    const user = {
        name: 'fordy',
        hobby: 'playing guitar'
    }
    res.send(user)
})

app.post('/profile', (req, res) => {
    console.log(req.body);
    res.send('Succes')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})