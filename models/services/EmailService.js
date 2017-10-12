/**
 * Created by DatLK on 10/11/2017.
 */
var nodemailer = require('nodemailer');
var path = require('path');
var ejs = require('ejs');
var models = require('../db');
var params = require('../../config/params');

var transporter = nodemailer.createTransport(params.mailer);

module.exports.register = function(user){
    ejs.renderFile(path.join(__dirname, '../..','views', 'mail', 'register.ejs'), { user: user, params: params }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            var subject = "Đăng ký tài khoản thành công";
            models.queued_email.create({From: "no-reply@moneylove.com", FromName: "Moneylove.com", To: user.Email, Subject: subject, Body: data, CreatedTime: Date.now()})
                .then(function(result){
                    var mainOptions = {
                        from: 'moneylove.com<no-reply@moneylove.com>',
                        to: user.Email,
                        subject: subject,
                        html: data
                    };
                    transporter.sendMail(mainOptions, function (err, info) {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('Message sent: ' + info.response);
                        }
                    });
                });
        }
    });
};


