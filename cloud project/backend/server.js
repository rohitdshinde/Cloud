const mongoose = require("mongoose");
const app = require("./app");

const DB = "mongodb://127.0.0.1:27017/Transform";
const PORT = 3000;

mongoose
  .connect(DB)
  .then(() => console.log("DB Connection Sucessfull..."))
  .catch(() => console.log("DB Connection Unsucessfull..."));

app.listen(PORT, () => console.log(`Application Running on PORT: ${PORT}`));
