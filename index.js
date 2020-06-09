var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname)));

app.use('/', express.static(path.join(__dirname, 'css')));
app.use('/', express.static(path.join(__dirname, 'img')));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'index.html'));
});

const port = process.env.PORT || 8080;


app.listen(port, () => console.log(`Server is running on port ${port}`));