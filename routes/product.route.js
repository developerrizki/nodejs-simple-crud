const express = require('express')
const router = express.Router()
const productController = require('../controllers/product.controller')

router.get('/', productController.getProducts)
router.get('/:id', productController.getProductById)
router.post('/', productController.storeProduct)
router.put('/:id', productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router

