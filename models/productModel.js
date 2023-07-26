const db = require("../db");
const { DataTypes } = require("sequelize");
const product = db.sequelize.define(
  "pharmacy_products",
  {
    id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
    product_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    inventory: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    tableName: "pharmacy_products",
  }
);

(async () => {
  try {
    await product.sync();
    console.log("Product model synced successfully!");
  } catch (error) {
    console.error("Error syncing product model:", error);
  }
})();

exports.model = product;
