// const express = require("express");
// const app = express();
// app.use(express.json());
// const PORT = 3000;

// const jobTypes = [
//   { id: 1, type: "Interior" },
//   { id: 2, type: "Exterior" }, // Fixed typo from "Etterior" to "Exterior"
//   { id: 3, type: "Roof" },
//   { id: 4, type: "Renovations" },
//   { id: 5, type: "Roof" },
// ];

// // GET route to return all job types
// app.get("/api/jobtypes", (req, res) => {
//   res.json(jobTypes); // Send back the jobTypes array as JSON
// });

// // POST route to add a new job type
// app.post("/api/jobtypes", (req, res) => {
//   const { type } = req.body; // Get the type from the request body
//   const newJobType = { id: jobTypes.length + 1, type }; // Dynamically assign ID based on the length of the array
//   jobTypes.push(newJobType); // Add the new job type to the array
//   res.status(201).json(newJobType); // Respond with the newly added job type and a 201 status
// });

// app.listen(PORT, console.log(`Listening on port ${PORT}....`));

const express = require('express')
const app = express()

app.get('/',  (req, res) => {
    res.send("hi")
})
app.post('/', (req, res) => {
    res.send("hello")
})

app.listen(3000)