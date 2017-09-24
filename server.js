const express = require('express');

var app = express();

app.use(express.static(__dirname + '/views'));

app.use((req, res, next) => {
  res.render('/views/index.html');
});

app.listen(3000, () => {
  console.log('server is up on port 3000')
});
