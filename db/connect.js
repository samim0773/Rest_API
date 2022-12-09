const mongoose = require('mongoose');
uri = "mongodb+srv://Samim:lRu6gjFP9zZ5dvfN@samimapi.vrnxomr.mongodb.net/SamimAPI?retryWrites=true&w=majority"
const connectDB = () => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB;