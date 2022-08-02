const express = require('express');

const playasRouter = require('../routes/playas.router');


function routerApi(app){

    const router = express.Router();
    app.use('/api', router);
    router.use('/playas', playasRouter);

}


module.exports = routerApi;