const { DataTypes, Model } = require('sequelize');
const db = require('../db');

class Card extends Model { };

Card.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  flip: {
    type: DataTypes.BOOLEAN,
    default: false,
    allowNull: false
  },
  content:{
    type: DataTypes.STRING,
  }
}, {
  sequelize: db,
  tableName: 'cards',
  modelName: 'Card'
});


module.exports = Card;
