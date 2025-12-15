const express = require("express");
const postRoutes = require("./routes/posts");

const logger = require("./middleware/logger");
const notFound = require("./middleware/notfound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(logger);

app.use("/post/api", postRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
