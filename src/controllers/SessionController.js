const User = require('../models/Usuario');

module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await User.findOne({ email });
    console.log(user);
    if (!user) user = await User.create({ email });

    return res.json(user);
  },
};
