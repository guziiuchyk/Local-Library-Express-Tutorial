const mongoose = require('mongoose')

mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv:*******************";
async function connectMongo() {
    await mongoose.connect(mongoDB);
    console.log('Mongo connected!')
}
module.exports = connectMongo