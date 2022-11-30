var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Gel', { title: 'Search Results Gel' });
});
var express = require('express');
const Gel_controller= require('../controller/Gel');
var router = express.Router();

// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
}
/* GET Gels */
router.get('/', Gel_controller.Gel_view_all_Page );
module.exports = router;

/* GET detail Gel page */
router.get('/detail', Gel_controller.Gel_view_one_Page);

/* GET create Gel page */
router.get('/create', secured, Gel_controller.Gel_create_Page);

/* GET create update page */

router.get('/update',secured, Gel_controller.Gel_update_Page);

/* GET delete Gel page */
router.get('/delete', secured, Gel_controller.Gel_delete_Page)