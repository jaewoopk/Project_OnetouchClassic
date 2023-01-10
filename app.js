// 첫 node js 구동


// var express = require('express');
// const res = require('express/lib/response');
// var app = express();

// app.get('/', function(req,res) {
//     res.send("Hello world!");
// });

// app.listen(3000, function() {
//     console.log('App Listening on port 3000');
// });

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');

app.get('/', function(req,res) {
    //res.send("Hello world!");
    var data = req.body;
    res.render('index', {name: data});
});

app.post('/', function(req,res) {
    var data = req.body.name;
    res.render('index', {name: data});
});

app.listen(3000, function() {
    console.log('App Listening on port 3000');
});


