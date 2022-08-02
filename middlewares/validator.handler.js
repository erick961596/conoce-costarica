const boom = require('@hapi/boom');

function validatorHanddler( schema, property){


  return (req, res, next) => {
    const { error } = schema.validate(req[property], { abortEarly: false });
    if (error) {
      //next(boom.badRequest(error));
      return res.status(400).next(boom.badRequest(error[0].message));
      
      

    }else
    {
    next();

  }
}
}

module.exports = validatorHanddler;
