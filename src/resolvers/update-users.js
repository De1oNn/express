import fs from "fs";

export const updateUser = (req, res) => {
  try {
    const { currentEmail, newEmail, password } = req.body;

    if (!currentEmail) {
      return res.status(400).json({ message: "Current email is required" });
    }
    if (!newEmail && !password) {
      return res
        .status(400)
        .json({
          message: "At least one field (newEmail or password) must be provided",
        });
    }
    if (newEmail === currentEmail) {
      return res
        .status(400)
        .json({ message: "New email must be different from current email" });
    }

    // file unshih
    const getData = fs.readFileSync("src/db/users.json", "utf8");
    const users = JSON.parse(getData);

    // shine email oruulhad ter email n burtgeltei baigaag shalgah 
    if (newEmail) {
      const emailExists = users.some((user) => user.email === newEmail);
      if (emailExists) {
        return res.status(409).json({ message: "New email is already in use" });
      }
    }

    // hereglegchiiin data g shinchleh 
    let userUpdated = false;
    const newUserData = users.map((cur) => {
      if (cur.email === currentEmail) {
        userUpdated = true;
        return {
          ...cur,
          email: newEmail || cur.email, 
          password: password || cur.password, 
        };
      }
      return cur;
    });

    if (!userUpdated) {
      return res.status(404).json({ message: "User not found" });
    }

    // shinchilsen data gaa dahin shih
    fs.writeFileSync(
      "src/db/users.json",
      JSON.stringify(newUserData, null, 2),
      "utf8"
    );

    res.json({ message: "Successfully updated user data" });
  } catch (error) {
    console.error("Error updating user:", error);
    res
      .status(500)
      .json({ message: "Failed to update user data", error: error.message });
  }
};
