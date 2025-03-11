const router = require('express').Router();
const productController = require('../controllers/productController.js');

router.post("/",productController.product_create);
router.get("/", productController.product_all);
router.get("/:productId", productController.product_details);
router.put("/:productId",);
router.delete("/:productId",);

module.exports = router;
