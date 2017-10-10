/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    FullName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Birthday: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Gender: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Avatar: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Satl: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    VerifyToken: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PasswordResetToken: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Active: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    IsDelete: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    CreatedTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UpdatedTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'users'
  });
};
