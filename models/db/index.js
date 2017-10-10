"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var config    = require("../../config/db.js");
var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    define: config.define,
    pool: config.pool
});
var models = [];
fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        models.push(model.name);
    });

models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// export connection
module.exports.sequelize = sequelize;
