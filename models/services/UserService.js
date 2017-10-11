/**
 * Created by ledat91 on 10/10/2017.
 */
var bcrypt = require("bcrypt-nodejs");
var sha1  = require("sha1");
var models = require("../db");

module.exports.Register = function (params) {
    var salt = bcrypt.genSaltSync(10);
    var password = sha1(params.registerPassword + "" + salt);
    var verifyToken = bcrypt.genSaltSync(35);

    return models.users.findOrCreate(
        {
            where : { Email : params.registerEmail},
            defaults : {
                FullName : params.registerName,
                Password : password,
                Phone : params.registerPhone,
                Salt : salt,
                VerifyToken : verifyToken,
                CreatedTime : Date.now(),
                Active : 0
            }
        }
    ).spread(function (user, created) {
        if(created){
            return user.get({plain: true});
        }else {
            return null;
        }
    });

};
