const Pool = require("pg").Pool;
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const pool = mongoose
  .connect(
    "mongodb+srv://menon:menon@cluster0.at5kdvl.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database successfully connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = pool;
