const express = require('express')
const app = express()

app.use(express.static('www'));

app.listen(3000, () => console.log('Bug showcase listening on port 3000!'))