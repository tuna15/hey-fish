const express = require('express');
var path = require('path');

const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/views'));

app.get((req, res, next) => {
  res.render('/index.html');
});

app.get('/map', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/map.html'));
});

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
