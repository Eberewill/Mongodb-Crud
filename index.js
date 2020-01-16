const express = require('express')
const app = express()
const port = 8000

const perons = [{name : "wiliams", age: 23, height: 5.5,},{name: 'Bumi', age: 21, height: 4.4,}]




app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users', (req, res) => res.send(perons))




app.listen(port, () => console.log(`Example app listening on port ${port}!`))