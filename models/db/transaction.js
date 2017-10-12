/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaction', {
    Id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    WalletId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'wallet',
        key: 'Id'
      }
    },
    CategoryId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'categories',
        key: 'Id'
      }
    },
    UserId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'users',
        key: 'Id'
      }
    },
    Amount: {
      type: DataTypes.INTEGER(18),
      allowNull: true,
      defaultValue: '0'
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
    },
    TransactionTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'transaction'
  });
};
