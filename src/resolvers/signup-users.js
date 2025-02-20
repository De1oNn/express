import { readUsers, saveUsers } from "../utils/userUtils.js";

export const signUpUsers = (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    return res.status(400).send("All fields are required.");
  }
  if (password !== confirmPassword) {
    return res.status(400).send("Passwords do not match.");
  }

  const users = readUsers();
  if (users.some((user) => user.email === email)) {
    return res.status(400).send("User already exists.");
  }

  users.push({ email, password });
  saveUsers(users);

  res.send("Sign-up successful!");
};
