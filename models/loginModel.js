const db = require('../db')
const {DataTypes} = require('sequelize');
const login = db.sequelize.define('ncmh_users',{

	firstName:{
		type: DataTypes.STRING,
		allowNull: false,
	},
	email:{
		type: DataTypes.STRING,
		allowNull: false,
	},
    password:{
		type: DataTypes.STRING,
		allowNull: false,
	},
	lastName:{
		type: DataTypes.STRING,
		allowNull: false,
	},
	phoneNumber:{
		type: DataTypes.STRING,
		allowNull: false,
	},
	address:{
		type: DataTypes.STRING,
		allowNull: false,
	}
},{
	tableName: 'ncmh_users'
});

(async () => {
	try {
	  await login.sync();
	  console.log("login model synced successfully!");
	} catch (error) {
	  console.error("Error syncing login model:", error);
	}
  })();

exports.model = login;