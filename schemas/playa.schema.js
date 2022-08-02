const joi = require('joi');

const id = joi.number().integer().required();
const nombre = joi.string().required();
const slug = joi.string().required();
const provincia = joi.number().integer().required();
const canton = joi.number().integer().required();
const ubicacionExacta = joi.string().required();
const tipoPlaya = joi.string().required();
const linkWaze = joi.string().required();
const linkGoogleMaps = joi.string().required();
const starts = joi.number().integer().required();
const gallery = joi.string().required();
const description = joi.string().required();
const imgThumg = joi.string().required();
const createdAt = joi.date().required();

const createPlayaSchema = joi.object({
    nombre: nombre.required(),
    slug: slug.required(),
    idProvincia: provincia.required(),
    idCanton: canton.required(),
    ubicacionExacta: ubicacionExacta.required(),
    tipoPlaya: tipoPlaya.required(),
    linkWaze: linkWaze.required(),
    linkGoogleMaps: linkGoogleMaps.required(),
    stars: starts.required(),
    gallery: gallery.required(),
    description: description.required(),
    imgThumb: imgThumg.required(),
   
});

const updatePlayaSchema = joi.object({
   
    nombre: nombre.required(),
    slug: slug.required(),
    idProvincia: provincia.required(),
    idCanton: canton.required(),
    ubicacionExacta: ubicacionExacta.required(),
    tipoPlaya: tipoPlaya.required(),
    linkWaze: linkWaze.required(),
    linkGoogleMaps: linkGoogleMaps.required(),
    stars: starts.required(),
    gallery: gallery.required(),
    description: description.required(),
    imgThumb: imgThumg.required(),
    
})

const getPlayaSchema = joi.object({
    id: id.required()
})
const getPlayaBySlugSchema = joi.object({
    slug: slug.required()
})
const getPlayaByProvinciaSchema = joi.object({
    provincia: provincia.required(),
})

module.exports = {
   createPlayaSchema,
    updatePlayaSchema,
    getPlayaSchema,
    getPlayaByProvinciaSchema,
    getPlayaBySlugSchema

}
