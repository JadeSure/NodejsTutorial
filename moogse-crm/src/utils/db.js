const mongoose = require('mongoose');

const connectToDB = () => {
    const connectionString = process.env.CONNECTIONS_STRING
    const PORT = process.env.PORT
    console.log(PORT);
    console.log(connectionString);
    if (!connectionString) {
        console.error('no connection string');
        // normal quit
        // abnormal quit 
        // human normal quit
        // process.exit(0)
        // human abnormal quit
        process.exit(1)
    }
    const db = mongoose.connection;
    db.on('connected', () => {
        console.log(`DB connected, ${connectionString}`);
    })
    db.on('error', error => {
        console.error(error.message)
        process.exit(1)
    });
    db.on('disconnected', () => {
        console.log('mongodb connection lost');
    })

    return mongoose.connect(connectionString)
}

module.exports = connectToDB