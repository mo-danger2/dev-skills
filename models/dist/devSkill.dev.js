"use strict";

var devSkills = [{
  id: 1,
  devSkill: 'javascript',
  done: true
}, {
  id: 2,
  devskill: 'Learn Express',
  done: true
}, {
  id: 3,
  devskill: 'python',
  done: false
}];

function getAll() {
  return devSkills;
}

function create(devSkills) {
  devSkill.id = Date.now() % 1000000;
  devSkill.done = false;
  devSkill.push(devSkill);
}

module.exports = {
  getAll: getAll,
  create: create
};
//# sourceMappingURL=devSkill.dev.js.map
