/** Start server for Lunchly. */
// command for start : nodemon -e js,html,css server.js

const app = require("./app");

app.listen(3000, function () {
  console.log("listening on 3000");
});
