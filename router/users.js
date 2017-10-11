/**
 * Created by ledat91 on 10/10/2017.
 */
var express = require('express');
var router = express.Router();
var params = require('../config/params');
var UserService = require('../models/services/UserService');

router.post("/register", function (req, res) {
    var params = req.body;
    if(!params.registerName || params.registerName.trim() === ''){
        res.json({success : false , message : "Tên không được để trống"});
    }
    if(!params.registerEmail){
        res.json({success : false , message : "Email không được để trống"});
    }
    if(!params.registerPhone || !params.registerRePassword || !params.registerPassword){
        res.json({success : false , message : "Phone, password không được để trống"});
    }
    UserService.Register(params).then(function (user) {
        console.log(user);
        if(user){
            res.json({success : true , message : "Tạo tài khoản thành công vui lòng vào email để xác nhận", data: user});
        }else {
            res.json({success : false , message : "Có lỗi xảy ra, F5 và thử lại"});
        }
    })


});



module.exports = router;
