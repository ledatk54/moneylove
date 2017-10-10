/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('money_transfer', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SentWalletId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'wallet',
        key: 'Id'
      }
    },
    ReceiverWalletId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'wallet',
        key: 'Id'
      }
    },
    Amount: {
      type: DataTypes.INTEGER(18),
      allowNull: true
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'money_transfer'
  });
};
