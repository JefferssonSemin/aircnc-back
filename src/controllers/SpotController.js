const Spot = require('../models/Spot');
const User = require('../models/Usuario');

module.exports = {
  async index(req, res) {
    const { tech } = req.query;

    const spots = await Spot.find({ techs: tech });

    return res.json(spots);
  },

  async store(req, res) {
    const { filename } = req.file;
    const { company, techs, price } = req.body;
    const { user } = req.headers;

    const user_id = await User.findById(user);

    if (!user_id) {
      return res.status(400).json({ error: 'Este usuario não existe' });
    }
    const spot = await Spot.create({
      user: user,
      thumbnail: filename,
      company,
      techs: techs.split(',').map(tech => tech.trim()),
      price,
    });
    return res.json(spot);
  },
};
