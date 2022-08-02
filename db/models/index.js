const { Playa, PLAYASCHEMA } = require('./playa.model')

function setupModels(sequelize){
    Playa.init(PLAYASCHEMA, Playa.config(sequelize));
}


module.exports = setupModels;