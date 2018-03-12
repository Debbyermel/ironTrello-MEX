var express = require('express');
var router = express.Router();
const controller = require("../controllers/lists.controller");

router.get('/', controller.getLists);
router.post('/', controller.postList);
router.patch('/:id', controller.patchList);
router.delete('/:id', controller.deleteList);

module.exports = router;
