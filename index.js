const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3000;

const jobTypes = [
  { id: 1, type: "Interior" },
  { id: 2, type: "Exterior" },
  { id: 3, type: "Roof" },
  { id: 4, type: "Renovations" },
  { id: 5, type: "Roof" },
];

app.get("/api", (req, res) => {
  res.send("hello world"); 
});
app.get("/api/hello", (req, res) => {
    res.send([
        { id: 1, usename: "nasaa", displayName: "nasaa"},
        { id: 2, usename: "sarnai", displayName: "sarnai"}
    ])
})
app.get("/api/users/:id", (req, res) => {
    res.send("heloo")
    console.log(req.params);
})


app.listen(PORT, console.log(`Listening on port ${PORT}....`));