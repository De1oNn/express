const students = require("../userData.js"); 
const addUsers = (req, res) => {
  const { name, age, password, } = req.body;
  const newStudent = { name, age, password};
  students.push(newStudent);
  // res.send(students);
  res.send(newStudent);
};

module.exports = addUsers;
