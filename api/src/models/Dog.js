const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Dog", {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    maxHeight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    minHeight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maxWeight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    minWeight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    life_span: {
      type: DataTypes.INTEGER,
    },
    img: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    // temperament: {
    //   type: DataTypes.ARRAY(DataTypes.STRING),
    // },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, { timestamps: false });
};
