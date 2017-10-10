/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wallet', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'Id'
      }
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Amount: {
      type: DataTypes.INTEGER(18),
      allowNull: false,
      defaultValue: '0'
    },
    CreatedTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UpdatedTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    IsDeleted: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'wallet'
  });
};
