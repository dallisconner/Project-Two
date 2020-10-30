module.exports = function (sequelize, DataTypes) {
  let Favorite = sequelize.define('Favorite', {
    movie: DataTypes.INTEGER,
    drink: DataTypes.STRING,
    snack: DataTypes.STRING,
  })
  return Favorite
}
