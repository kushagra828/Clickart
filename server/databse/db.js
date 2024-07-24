const mongoose = require("mongoose");

//mongoose.connect('mongodb+srv://user:user@cluster0.ik8mrzk.mongodb.net/?retryWrites=true&w=majority');

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster1.uzfhrsq.mongodb.net/?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
module.exports = { Connection };
