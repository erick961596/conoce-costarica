const { Model, DataTypes, Sequelize } = require('sequelize');

const PLAYA_TABLE = 'playas';
const PLAYASCHEMA = {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    slug:{
        type: DataTypes.STRING,
        allowNull: false
    },
    idProvincia:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    idCanton:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ubicacionExacta:{
        type: DataTypes.STRING,
        allowNull: false
    },
    tipoPlaya:{
        type: DataTypes.STRING,
        allowNull: false
    },
    linkWaze:{
        type: DataTypes.STRING,
        allowNull: false
    },
    linkGoogleMaps:{
        type: DataTypes.STRING,
        allowNull: false
    },
    stars:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gallery:{
        type: DataTypes.STRING,
        allowNull: false
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false
    },
    imgThumb:{
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt:{
        type:DataTypes.DATE,
        allowNull:false,
        field:'created_at',
        defaultValue:Sequelize.NOW
    }
}


class Playa extends Model {

    static associate(){

    }

    static config (sequelize){
        return {
            sequelize,
            tableName: PLAYA_TABLE,
            modelName: 'Playa',
            timestamps: false,
        
        }
    }
}


module.exports = {
    Playa,
    PLAYASCHEMA,
    PLAYA_TABLE
    
}