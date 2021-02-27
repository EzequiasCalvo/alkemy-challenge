const express = require("express");
const app = express();
const morgan = require("morgan");

app.set("port", process.env.port || 4000);

// Middlewares
app.use(morgan("dev"));

// Routes
app.use(require("./routes"));

// Connect server
app.listen(app.get("port"), () => {
  console.log(`server listening on port: ${app.get("port")}`);
});
