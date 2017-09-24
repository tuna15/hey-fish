const express = require('express');

const port = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + '/views'));

app.use((req, res, next) => {
  res.render('/index.html');
});

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
