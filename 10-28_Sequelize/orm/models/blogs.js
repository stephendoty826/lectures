'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blogs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      models.blogs.belongsTo(models.user, {foreignKey: "userID"}) // takes model to be joined and foreignKey

    }
  };
  blogs.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    userID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'blogs',
  });
  return blogs;
};