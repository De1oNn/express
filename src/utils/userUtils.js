import fs  from "fs";

export const readUsers = () => {
  try {
    const data = fs.readFileSync("./users.json");
    return JSON.parse(data) || [];
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    console.error("Error reading users.json:", error);
    return [];
  }
};

export const saveUsers = (users) => {
  try {
    console.log("Saving users:", users);
    fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));
  } catch (error) {
    console.error("Error saving users.json:", error);
  }
};
