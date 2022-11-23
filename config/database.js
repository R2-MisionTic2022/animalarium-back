const mongoose = require('mongoose');

const host = "localhost";
const port = "27017";
const db = "mascotasdb";



exports.mongoConnect = () => {
    //const mongoStringConnection = `mongodb://${host}:${port}/${db}`;
    const mongoStringConnection = `mongodb+srv://ncorredors:8PNj0uUR4wLBdhXH@proyectoanimalarium.rwzas25.mongodb.net/mascotasdb?retryWrites=true&w=majority`;

    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind
    (console, "Mongodb connection error"))
}


// module.exports = {
//     mongoURILocal: "mongodb://127.0.0.1:27017/ciclo4a",
//     mongoURI:
//       "mongodb+srv://Master:1234@cluster0.hge29.mongodb.net/ciclo4a?retryWrites=true&w=majority",
//   };