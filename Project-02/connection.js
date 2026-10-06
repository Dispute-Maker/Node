const { default: mongoose } = require("mongoose");

async function connectMongoDb(url) {
  //connection
  mongoose.connect(url).then(() => console.log("mangoDB Connected"));
}

module.exports = {connectMongoDb}
