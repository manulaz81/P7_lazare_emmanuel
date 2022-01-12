

const userModel = require('../models/modelUser');


exports.signUp = (req, res, next) => {
    console.log(req.body);
//    const usergroupo = new userModel ({
//        email = req.body.email,
//    });
		next();
  };