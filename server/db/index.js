const mongoose = require(`mongoose`);

function connectDb() {
    return new Promise((resolve, reject) => {
        const dbUrl = `mongodb://127.0.0.1:27017`;
        mongoose.connect(dbUrl);
        const connection = mongoose.connection;
        connection.on(`error`, reject);
        connection.on(`open`, resolve);
    });
}

module.exports = {
    connectDb
}
