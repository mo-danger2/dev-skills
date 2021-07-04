"use strict";

var express = require('express');

var router = express.Router();

var todosCtrl = require('../controllers/todos');

router.get('/', todosCtrl.index);
router.post('/', todosCtrl.create);
//# sourceMappingURL=dev-skills.dev.js.map
