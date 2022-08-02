const { Sequelize } = require('sequelize');


function logErrors(err, req, res, next){
console.log("log error");
  console.error(err);

  next(err);
}

function errorHanddler(err, req, res, next){
  console.log("error handler");
  res.status(500);
  res.json({
    message: err.message,
    stack: err.stack
  });
}

function boomHanddler(err, req, res, next){
  if (err.isBoom) {
    res.status(err.output.statusCode);
    res.json(err.output.payload);
  }else{
    next(err);
  }


}

function sequelizeHanddler(err, req, res, next){

  if (err instanceof Sequelize.ValidationError) {
    res.status(409);
    res.json({
      statusCode: 409,
      message: err.message,
      errors: err.errors
    });
  }
  
    //next(err);
  
}

module.exports = {logErrors, errorHanddler, boomHanddler, sequelizeHanddler};
