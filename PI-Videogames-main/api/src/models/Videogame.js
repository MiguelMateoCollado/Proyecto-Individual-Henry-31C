const { DataTypes, DATEONLY } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "videogame",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      id: {
        type: DataTypes.INTEGER,

        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
      },
      rating: {
        type: DataTypes.FLOAT,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      platforms:{
        type: DataTypes.STRING
      }
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
