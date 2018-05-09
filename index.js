const express = require('express');
var open = require("open");

const port = 3000;

const app = express()
app.use(express.static('www-express'));

open("http://localhost:" + port);
app.listen(port, () => console.log('Bug showcase listening on port 3000!'))