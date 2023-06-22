const express = require("express");

const productController = require('../controllers/productController')

const productRouter = express.Router()

productRouter.post("/", productController.addProduct)
productRouter.get("/", productController.getProduct)
productRouter.patch("/", productController.updateProduct)
productRouter.delete("/", productController.deleteProduct)


module.exports = productRouter