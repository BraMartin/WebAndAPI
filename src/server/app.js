/*
    This part is taken and then modified by removing unnecessary parts from
    https://github.com/arcuri82/web_development_and_api_design/blob/master/les11/forum/src/server/app.js
*/
const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('public'));


app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, '..', '..', 'public', 'index.html'));
});

module.exports = {app};