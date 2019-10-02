module.exports = {
  async store(req, res) {
    const { email } = req.body;

    let user = await user.findOne({ email });

    if (!user)
      const user = await User.create({ email });
      
      
      return res.json(user);
  },
};
