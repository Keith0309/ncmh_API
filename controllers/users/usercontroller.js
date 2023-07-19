const usersModel = require("../../models/userModel.js").model;
exports.getUser = async (req, res) => {
	const users = await usersModel.findAll();
	res.send(users)
}

exports.postUser = async (req, res) => {
	const addedUser = await usersModel.create({
		email: req.body.email,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		password: req.body.password
	})
	res.send(addedUser); 
}

exports.patchUser = async (req, res) => {
	const updatedUser = await usersModel.update({
		user: req.body.user
	}, {where: {id: req.params.id}})
	res.send(updatedUser)
}

exports.deleteUser = async (req, res) => {
	const deletedUser = await usersModel.destroy({where:{id: req.params.id}})
	res.send({affectedRows:deletedUser})
}