/**
 * Created by DatLK on 10/11/2017.
 */
var nodemailer = require('nodemailer');
var path = require('path');
var ejs = require('ejs');
var models = require('../db');
var params = require('../../config/params');

var transporter = nodemailer.createTransport(params.mailer);

module.exports.register = function(customer){
    ejs.renderFile(path.join(__dirname, '../..','views', 'mail', 'register.ejs'), { customer: customer, params: params }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            var subject = "Đăng ký tài khoản thành công";
            models.queued_email.create({From: "no-reply@ebaydeals.vn", FromName: "EbayDeals.vn", To: customer.Email, Subject: subject, Body: data, CreatedTime: Date.now()})
                .then(function(result){
                    var mainOptions = {
                        from: 'EbayDeals.vn <no-reply@ebaydeals.vn>',
                        to: customer.Email,
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


