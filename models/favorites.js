module.exports = function (sequelize, DataTypes) {
  let Favorite = sequelize.define('Favorite', {
    movie: DataTypes.STRING,
    drink: DataTypes.STRING,
  })
  return Favorite
}
