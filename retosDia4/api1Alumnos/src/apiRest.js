const app = require("./app");

const PORT = app.get("port");

app.listen(PORT, function () {
    console.log("Server listening on port " + PORT);
});
