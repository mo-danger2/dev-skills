"use strict";

var devSkill = require('../models/dev-skills');

function index(req, res) {
  res.render('devskills/index', {
    todos: devskills.getAll()
  });
}

module.exports = {
  index: index
};
//# sourceMappingURL=dev-skills.dev.js.map
