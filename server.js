var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.sendfile('./views/index.html');
});
 
app.get('/about', function(req, res) {
    res.sendfile('./views/about.html');
});
 
app.get('/article', function(req, res) {
    res.sendfile('./views/article.html');
});

app.get('/', function(req, res){
  res.send("Titty Winks");
});

app.listen(3000);
console.log("You are listening on localhost:3000");