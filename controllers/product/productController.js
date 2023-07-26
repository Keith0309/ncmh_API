const productModel = require("../../models/productModel").model;

exports.postProduct = async (req, res) => {
    try{
        const addedProduct = await productModel.create({
            product_image: req.file.filename,
            product_name: req.body.product_name,
            description: req.body.description,
            category: req.body.category,
            price: req.body.price,
            inventory: req.body.stocks
        });
        res.send(addedProduct); 
    }catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: "Internal server error" });
      }
}

exports.getProduct = async (req, res) => {
    try {
      const products = await productModel.findAll({
        attributes: ['id','product_image', 'product_name', 'description', 'category', 'price', 'inventory'],
      });
      res.json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
