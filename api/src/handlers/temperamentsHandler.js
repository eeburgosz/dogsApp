const { getDbTemperaments } = require('../controllers/temperamentsController');

const temperamentHandler = async (req, res) => {
   const apiTemper = await getDbTemperaments();
   res.status(200).send(apiTemper);
};

module.exports = { temperamentHandler };