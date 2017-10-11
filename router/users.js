/**
 * Created by ledat91 on 10/10/2017.
 */
var express = require('express');
var router = express.Router();
var params = require('../config/params');
var UserService = require('../models/services/UserService');
var utility = require('../models/helper/utility');

router.post("/register", function (req, res) {
    var params = req.body;
    if(!params.registerName || params.registerName.trim() === ''){
        res.json({success : false , message : "Tên không được để trống"});
        return;
    }
    if(!params.registerEmail){
        res.json({success : false , message : "Email không được để trống"});
        return;
    }
    if(!params.registerPhone || !params.registerRePassword || !params.registerPassword){
        res.json({success : false , message : "Phone, password không được để trống"});
        return;
    }
    UserService.Register(params).then(function (user) {
        if(user){
            res.json({success : true , message : "Tạo tài khoản thành công vui lòng vào email để xác nhận", data: user});
        }else {
            res.json({success : false , message : "Email đã tồn tại"});
        }
    });
});


router.post('/forgot-pass', function (req, res) {
   var email = req.body.Email;
   if(!email || !utility.isEmail(email)){
       res.json({success : false , message : "Email không đúng định dạng"});
       return false;
   }
    UserService.ForgotPassword(email).then(function (result) {
        if(!result){
            res.json({success : false , message : "Có lỗi xảy ra, F5 và thử lại"});
        }else {
            res.json({success : true , message : "Yêu cầu mật khẩu thành công vui lòng vào email để xác nhận"});
        }
    })

});

router.post('/update-info', function (req , res) {
    const msgNameErr    = " Tên không được để trống";
    const msgPhoneErr   = " Số điện thoại không được để trống";
    const msgErr        = " Cập nhật thất bại , vui lòng F5 và thử lại ";
    const msgSuccess    = " Cập nhật thông tin thành công ";
   var params = req.body;
   if(!params.FullName.trim()){
       res.json({success : false , message : msgNameErr});
       return;
   }
   if(!params.Phone.trim()){
       res.json({success : false , message : msgPhoneErr});
       return;
   }
   UserService.UpdateInfo(params).then(function (result) {
       if(!result){
           res.json({success : false , message : msgErr});
       }else {
           res.json({success : true , message : msgSuccess})
       }
   })


});


module.exports = router;
