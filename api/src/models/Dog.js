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
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    minHeight: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    maxWeight: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    minWeight: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    life_span: {
      type: DataTypes.DECIMAL,
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
