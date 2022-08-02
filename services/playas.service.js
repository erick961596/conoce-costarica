const boom = require('@hapi/boom');

const {models} = require('../libs/sequelize');

class PlayaService{
    constructor(){
        this.playas =[];
    }

    async find(){
        const playas = await models.Playa.findAll();
        return playas;
    }

    async findById(id){
        const playa = await models.Playa.findOne({
            where: {
                id: id
            }
        });

        if(!playa){
            throw boom.notFound('Playa not found');
        }

        return playa;
    }

    async getPlayasByProvincia(provincia){
        const playas = await models.Playa.findAll({
            where: {
                provincia: provincia
            }
        });

        if(!playas){
            throw boom.notFound('Playas not found');
        }

        return playas;
    }

    async findBySlug(slug){
        const playa = await models.Playa.findOne({
            where: {
                slug: slug
            }
        });

        if(!playa){
            throw boom.notFound('Playa not found');
        }

        return playa;
    }

    async create(playa){
        const newPlaya = await models.Playa.create(playa);
        return newPlaya;
    }

    async update(id, playa){
        const updatedPlaya = await models.Playa.update(playa, {
            where: {
                id: id
            }
        });

        if(!updatedPlaya){
            throw boom.notFound('Playa not found');
        }

        return updatedPlaya;
    }

    async delete(id){
        const deletedPlaya = await models.Playa.destroy({
            where: {
                id: id
            }
        });

        if(!deletedPlaya){
            throw boom.notFound('Playa not found');
        }

        return deletedPlaya;
    }

}


module.exports = PlayaService;