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
    alturaMax: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    alturaMin: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pesoMax: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    pesoMin: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    edadProm: {
      type: DataTypes.DECIMAL,
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  }, { timestamps: false });
};
