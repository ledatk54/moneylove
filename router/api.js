/**
 * Created by ledat91 on 10/9/2017.
 */
var express = require('express');
var router = express.Router();
var models = require("../models/db");

router.post("/categories", function (req, res) {
    var params = req.body;
    models.categories.findOrCreate({
        where : { Name : params.Name},
        defaults: {
            UserId : params.UserId,
            Type : params.Type,
            CreatedTime : Date.now()
        }
    }).spread(function (categories, created) {
        if(created){
            res.json({success: true, messages: "Tạo danh mục thành công", data: categories});
        }else {
            res.json({success: false, messages: "Tạo danh mục thất bại"});
        }
    })
});


module.exports = router;