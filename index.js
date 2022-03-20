const express = require("express");
const app = express();
const PORT = process.env.PORT || 5417;

app.use(express.static("lab"));


app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
