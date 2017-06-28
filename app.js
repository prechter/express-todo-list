const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());


let todos = [];


app.get("/", function (req, res) {
  res.render('index', { todos: todos });
});


app.post("/", function (req, res) {
    todos.push({'todo': req.body.item, 'status': false});
    res.redirect('/');
});


app.post("/update", function (req, res) {
    todos.push({'todo': req.body.item, 'status': true});
    res.redirect('/');
});


app.listen(3000, function () {
  console.log('Successfully started express application!');
});
