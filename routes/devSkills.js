var express = require('express');
var router = express.Router();
var devSkillsCtrl = require('../controllers/devSkills');



router.get('/', devSkillsCtrl.index)
router.post('/', devSkillsCtrl.create);