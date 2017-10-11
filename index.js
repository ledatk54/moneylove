/**
 * Created by DatLK on 10/9/2017.
 */
var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");
var port = 3000;
var api = require("./router/api");
var user = require("./router/users");

var app = express();

// view setup

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
app.use(express.static(__dirname + "/client/dist/"));
app.set('port', port);

//router
app.use('/api', api);
app.use('/user', user);

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(port, function () {
    console.log("listen on "+ port);
});