const router = require('express').Router();
const productController = require('../controllers/productController.js');

router.post("/",);
router.get("/", productController.product_all);
router.get("/:productId",);
router.put("/:productId",);
router.delete("/:productId",);

module.exports = router;
