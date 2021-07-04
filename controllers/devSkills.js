var devSkill = require('../models/devSkill');



function index(req, res) {
    res.render('devskills/index', {
      todos: devskills.getAll(),
    });
  }

  
  function create(req, res) {
    console.log(req.body);
    req.body.done = false;
    devskill.create(req.body);
    res.redirect('/devskills');
  }




module.exports ={
    index , 
    create
    
    
}


