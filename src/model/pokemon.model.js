const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const contactSchema = mongoose.Schema({
    'id'             : { type: Number, required: true },
    'name'           : { type: String, required: true },
    'weight'         : { type: Number, required: true },
    'height'         : { type: Number, required: true },
    'base_experience': { type: String, required: true },
    'attacks'        : { type: Array, required: true }
}, { collection: 'pokemonsList' });

module.exports = mongoose.model('Pokemon', contactSchema);