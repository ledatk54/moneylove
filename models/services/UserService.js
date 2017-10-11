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

module.exports.ForgotPassword = function (email) {
    var passwordResetToken = bcrypt.genSaltSync(35);
    return models.users.findOne(
        {
            where : { Email : email }
        }
    ).then(function (user) {
        if(!user) {
            return false;
        }else {
            return models.users.update({ PasswordResetToken : passwordResetToken }, { where: { Email : user.Email }})
                .then(function (result) {
                    return result;
                });
        }
    })
};

module.exports.UpdateInfo = function (params) {
    var userId = params.UserId;
      return models.users.update(
          {
              FullName : params.FullName,
              Address : params.Address,
              Phone : params.Phone,
              Gender : params.Gender,
              Birthday : params.Birthday,
          },
          {
              where : { Id : userId}
          }
      ).then(function (result) {
          return result;
      })
};
