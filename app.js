const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const apiRouter = require("./server/api");

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("tiny"));
app.use(cors());

const PORT = process.env.PORT || 4000;

app.use("/api", apiRouter);

app.listen(PORT, console.log(`App is listening at ${PORT}`));

module.exports = app;
