const express = require("express");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const userRoutes = require("./routes/userRoutes.js");
const checkPassword = require("./resolvers/checkPassword.js");

const app = express();
app.use(express.json());

const PORT = 3000;

const readUsers = () => {
  try {
    const data = fs.readFileSync("./users.json", "utf-8"); 
    return data ? JSON.parse(data) : [];
  } catch (error) {
    if (error.code === "ENOENT") {
      return []; 
    }
    throw error; 
  }
};

const saveUsers = (users) => {
  console.log("Saving users:", users);
  fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));
};

app.post("/sign-up", async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).send("Passwords do not match.");
  }

  const users = readUsers();

  if (users.some((user) => user.email === email)) {
    return res.status(400).send("User already exists.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword });

  saveUsers(users);

  res.send("Sign-up successful!");
});

app.post("/log-in", async (req, res) => {
  const { email, password } = req.body;

  const users = readUsers();

  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(400).send("User not found.");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).send("Incorrect password.");
  }

  res.send("Login successful!");
});


app.use("/users", userRoutes);
app.post("/check-password", checkPassword);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
