const app = require('express');
const router = app.Router();

router.post('/');

router.get('/');

router.get('/:productId');

router.put('/:productId');

router.delete('/:productId');

module.exports = router;