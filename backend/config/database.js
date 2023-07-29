const mongoose = require('mongoose');


const connectDatabase = () => {
    mongoose.connect(" mongodb://127.0.0.1/ecommerce1", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
    })
}

module.exports = connectDatabase