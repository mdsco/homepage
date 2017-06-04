const express = require('express');
const path = require('path');
const app = express();

var index = require('./routes/index');

app.set('port', process.env.PORT || 8080);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

var listener = app.listen(app.get('port'), function() {
  console.log("listening on port " + listener.address.port);
});

module.exports = app;

