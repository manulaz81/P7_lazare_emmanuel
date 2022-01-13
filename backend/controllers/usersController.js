const userModel = require('../models/modelUser');
// const { Sequelize } = require('sequelize');

exports.signUp = async (req, res, next) => {
	const { pseudo, email, password } = req.body;

    await userModel.sync({ force: true });

    //créeation dans la base de donnée
	try {
        // await Sequelize.sync();
		const user = await userModel.create({ pseudo, email, password });
        console.log(user);
		res.status(201).json({ user: user._id });
	} catch (err) {
		res.status(200).send({ err });
	}

	console.log(req.body);
	//    const usergroupo = new userModel ({
	//        email = req.body.email,
	//    });
};
