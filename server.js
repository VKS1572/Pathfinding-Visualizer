const express = require("express");
const app = express();

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
})

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});