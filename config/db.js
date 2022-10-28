require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    });
    console.log("MongoDB Connection Success");
  } catch (error) {
    console.error("MongoDB Connection Fail");
    process.exit(1);
  }
};

module.exports = connectDB;
