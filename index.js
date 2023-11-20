const express = require("express");
const app = express();
const port = 3100;

app.get("/", (req, res) => {
  res.send("Jefferson : What a temptation not to write 😥");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
