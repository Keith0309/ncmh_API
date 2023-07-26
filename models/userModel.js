const db = require('../db')
const {DataTypes} = require('sequelize');
const user = db.sequelize.define('ncmh_users',{
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	email:{
		type: DataTypes.STRING,
		allowNull: false,
	},
    firstName:{
		type: DataTypes.STRING,
		allowNull: false,
	},
    lastName:{
		type: DataTypes.STRING,
		allowNull: false,
	},
    password:{
		type: DataTypes.STRING,
		allowNull: false,
	},
	phoneNumber:{
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	address:{
		type: DataTypes.INTEGER,
		allowNull: false,
	}
},{
	createdAt: true,
	updatedAt: true,
	deletedAt: true,
	tableName: 'ncmh_users'
});

(async () => {
	try {
	  await user.sync();
	  console.log("user model synced successfully!");
	} catch (error) {
	  console.error("Error syncing user model:", error);
	}
  })();


exports.model = user;