import app from "./app.js";

// Starting the server
app.listen(app.get("port"), () => {
    console.log(`🚀 Server listening on port ${app.get("port")}`);
});