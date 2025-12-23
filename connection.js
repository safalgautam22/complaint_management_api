const mongoose = require("mongoose")

async function connectDatabase (){
    await mongoose.connect(process.env.DBCONNECTION)
    console.log("Database Connected SUccessfully")
}

module.exports = connectDatabase