module.exports = function (sequelize, DataTypes) {
  let Favorite = sequelize.define('Favorite', {
    movie: DataTypes.STRING,
    drink: DataTypes.STRING,
    candy: DataTypes.STRING,
  })
  return Favorite
}
