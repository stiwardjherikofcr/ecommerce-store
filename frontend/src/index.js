const app = require("./app");

// Starting the server
app.listen(app.get("port"), () => {
    console.log(`🚀 Server listening on port ${app.get("port")}`);
});