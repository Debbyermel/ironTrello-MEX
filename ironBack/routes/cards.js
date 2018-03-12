var express = require('express');
var router = express.Router();
const controller = require("../controllers/cards.controller");

router.get('/', controller.getCards);
router.post('/', controller.postCard);
router.patch('/:id', controller.patchCard);
router.delete('/:id', controller.deleteCard);

module.exports = router;
