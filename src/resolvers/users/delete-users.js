import fs from "fs";

export const deleteUser = (req, res) => {
  const { email } = req.body;

  const userData = fs.readFileSync("src/db/users.json");
  const users = JSON.parse(userData);

  const filteredUsers = users.filter((cur) => cur.email !== email);

  fs.writeFileSync("src/db/users.json", JSON.stringify(filteredUsers));

  res.json({ message: "Deleted" });
};
