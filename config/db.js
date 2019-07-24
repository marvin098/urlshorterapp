const mongose = require('mongoose');
const config = require('config');
const dbUrl = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongose.connect(dbUrl, {
            useNewUrlParser: true
        })

        console.log('MongoDB connected using uri: ' + dbUrl);
    } catch (error) {
        console.log('Error durning connection to db...');
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;