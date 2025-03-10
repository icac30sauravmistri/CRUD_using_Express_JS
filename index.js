const express = require('express');
const { PORT, URI } = require('./config/index.js');

const app = express();

app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
});