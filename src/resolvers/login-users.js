import {readUsers} from "../utils/userUtils.js"

export const logInUsers = (req, res) => {
    const { email, password } = req.body;
    const users = readUsers();

    const user = users.find((user) => user.email === email);
    if (!user) {
      return res.status(400).send("User not found.");
    }
    if (password !== user.password) {
      return res.status(400).send("Incorrect password.");
    }

    res.send("Login successful!");
}