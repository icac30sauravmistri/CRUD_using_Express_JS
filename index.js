const PORT = require('./config/index.js');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.json({
        "message": "Hello, this application is for the crud option in node.js using express.js framework."
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})