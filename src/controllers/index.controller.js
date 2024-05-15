const controller = {}
const dbConnection =  require('../dbConnection/connection')
const PokemonModel = require('../model/pokemon.model')

controller.index = async (req, res) => {
    try {
        const pokemonsList = await PokemonModel.find();
        res.render('index', { pokemonsList });
    } catch (error) {
        console.log(error);
        res.status(500).send('Error on processing');
    }
};

module.exports = controller;