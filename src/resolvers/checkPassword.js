const checkPassword = (req, res) => {
  const { password, confirmPassword } = req.body;
  if (!password || !confirmPassword) {
    return res
      .status(400)
      .send("Please provide both password and confirm password.");
  }
  if (password === confirmPassword) {
    return res.send("Password match successful.");
  } else {
    return res.send("Password mismatch. Please try again.");
  }
};
module.exports = checkPassword;