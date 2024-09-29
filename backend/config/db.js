const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
    console.log("process.env.DBURL",process.env.DBURL);
  try {
    const conn = await mongoose.connect(process.env.DBURL, {
    
    });
    

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;