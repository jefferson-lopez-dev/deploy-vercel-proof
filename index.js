const express = require("express");
const app = express();
const port = 3100;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Message</title>
</head>
<body>
  <h1>si se me hace deficil no poder escribirte</h1
</body>
</html>`;

app.get("/", (req, res) => {
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
