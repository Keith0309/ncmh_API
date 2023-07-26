// addProduct.js
const express = require('express');
const router = express.Router();
const productController = require("../../controllers/product/productController");
const multer = require('multer');
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/product_images')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
  })
  
  const upload = multer({
    storage: storage
  })


router.post("/", upload.single('file'), productController.postProduct);

router.get('/', productController.getProduct);

module.exports = router;





