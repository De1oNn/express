import jwt from "jsonwebtoken";
import { readUsers } from "../../utils/userUtils.js";

export const logInUsers = (req, res) => {
  const { email, password } = req.body;
  const users = readUsers();

  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(400).json({ message: "User not found." });
  }
  if (password !== user.password) {
    return res.status(400).json({ message: "Incorrect password." });
  }

  // Generate JWT token
  const token = jwt.sign({ email: user.email }, "secret", { expiresIn: "1h" });

  res.json({ message: "Login successful!", token });
};
