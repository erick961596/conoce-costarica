const express = require('express');

const playasService = require('../services/playas.service');

const validatorHandler = require('../middlewares/validator.handler');

const { getPlayaSchema, createPlayaSchema, updatePlayaSchema, getPlayaBySlugSchema } = require("../schemas/playa.schema");


const service = new playasService();

const router = express.Router();


router.get('/', async (req, res) => {
    const playas = await service.find();
    res.json(playas);
});

router.get('/:id', 
validatorHandler(getPlayaSchema, 'params'),
async (req, res) => {
    const playa = await service.findById(req.params.id);
    res.json(playa);
})

router.get('/slug/:slug', 
validatorHandler(getPlayaBySlugSchema, 'params'),
async (req, res, next) => {

    try {
    const playa = await service.findBySlug(req.params.slug);
    res.json(playa);
    } catch (error) {
        
        next(error);
    }
    
}
)

router.post('/', 
validatorHandler(createPlayaSchema, 'body'),
async (req, res) => {
    try {
        const {error} = createPlayaSchema.validate(req.body);

        if(error){
           return res.status(400).json({
                error: error.details[0].message
           })

        }

        const playa = await service.create(req.body);
        res.json(playa);    
    } catch (error) {
        next(error);
    }
    
    
})

router.patch('/:id',
validatorHandler(getPlayaSchema, 'params'),
validatorHandler(updatePlayaSchema, 'body'),
async (req, res, next) => {

    try{
        const playa = await service.update(req.params.id, req.body);
        res.json(playa);    
    } catch(err){
        next(err);
    }
    
})

module.exports = router;