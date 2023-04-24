const { getDbTemperaments } = require('../controllers/temperamentsController');

const temperamentHandler = async (req, res) => {
   res.status(200).send(await getDbTemperaments());
};

module.exports = { temperamentHandler };