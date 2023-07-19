const db = require('../db')
const {DataTypes} = require('sequelize');
const user = db.sequelize.define('ncmh_users',{
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	email:{
		type: DataTypes.STRING
	},
    firstName:{
		type: DataTypes.STRING
	},
    lastName:{
		type: DataTypes.STRING
	},
    password:{
		type: DataTypes.STRING
	}
},{
	createdAt: true,
	updatedAt: true,
	deletedAt: true,
	tableName: 'ncmh_users'
})

exports.model = user;