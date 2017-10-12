/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('queued_email', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    From: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FromName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    To: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Subject: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Body: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CreatedTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'queued_email'
  });
};
