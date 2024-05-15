const mongoose = require('mongoose');


// const DB_NAME = 'pokemons';
// const DB_PORT = 27017;
// const uri = `mongodb://localhost:${DB_PORT}/${DB_NAME}`;

const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;
const DB_HOST = process.env.DB_HOST;
const uri = `mongodb://localhost:${DB_PORT}/${DB_NAME}`;

console.log('>>>>>>>',DB_HOST)
console.log('>>>>>>>',DB_NAME)
console.log('>>>>>>>',DB_PORT)

mongoose.connect(uri);

const db = mongoose.connection;

const dbConnection = () => {
    return new Promise((resolve, reject) => {
        db.on('error', (error) =>{
            reject(new Error(`error diring conction with MongoDB"${DB_NAME}": ${error}`))
        });
        db.once('open', () => {
            console.log('Connected!');
            resolve(db);
        });
    });
};

module.exports = dbConnection;