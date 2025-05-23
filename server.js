const express = require("express");
const path = require("path");

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + "/dist/gaurbrothers/browser"));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/gaurbrothers/browser/index.html"));
});
// Start the app by listening on the default Heroku port
const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log("Express server listening on port", port);
});
