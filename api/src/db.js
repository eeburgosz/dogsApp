// require('dotenv').config();
// const { Sequelize } = require('sequelize');
// const fs = require('fs');
// const path = require('path');
// const {
//   DB_USER, DB_PASSWORD, DB_HOST,
// } = process.env;

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });
// const basename = path.basename(__filename);

// const modelDefiners = [];

// // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
// fs.readdirSync(path.join(__dirname, '/models'))
//   .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach((file) => {
//     modelDefiners.push(require(path.join(__dirname, '/models', file)));
//   });

// // Injectamos la conexion (sequelize) a todos los modelos
// modelDefiners.forEach(model => model(sequelize));
// // Capitalizamos los nombres de los modelos ie: product => Product
// let entries = Object.entries(sequelize.models);
// let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
// sequelize.models = Object.fromEntries(capsEntries);

// // En sequelize.models están todos los modelos importados como propiedades
// // Para relacionarlos hacemos un destructuring
// const { Dog } = sequelize.models;

// // Aca vendrian las relaciones
// // Product.hasMany(Reviews);

// module.exports = {
//   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
//   conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
// };
//! **************************************************************************************************************
const { Sequelize } = require("sequelize");
require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const DogModel = require('./models/Dog');
const TemperamentModel = require('./models/Temperament');

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`,
  { logging: false }  //! Para que no me muestre todo el log cada vez que sincronizo la DB
);

// sequelize.define("Dog", {
//   id: {
//     primaryKey: true,
//     type: DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     unique: true
//   },
//   alturaMax: {
//     type: DataTypes.DECIMAL,
//     allowNull: false
//   },
//   alturaMin: {
//     type: DataTypes.DECIMAL,
//     allowNull: false
//   },
//   pesoMax: {
//     type: DataTypes.DECIMAL,
//     allowNull: false
//   },
//   pesoMin: {
//     type: DataTypes.DECIMAL,
//     allowNull: false
//   },
//   edadMax: {
//     type: DataTypes.STRING,
//   },
//   created: {
//     type: DataTypes.BOOLEAN,
//     defaultValue: true
//   }
// }, { timestamps: false });

DogModel(sequelize);
TemperamentModel(sequelize);

//! Relaciones------------------------------------------------
// console.log(sequelize.models);
const { Dog, Temperament } = sequelize.models;

Dog.belongsToMany(Temperament, { through: "DogTemperament" });
Temperament.belongsToMany(Dog, { through: "DogTemperament" });
//!-----------------------------------------------------------

module.exports = { sequelize, ...sequelize.models };