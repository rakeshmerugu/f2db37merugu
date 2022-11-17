var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Gel', { title: 'Search Results Gel' });
});
var express = require('express');
const Gel_controller= require('../controller/Gel');
var router = express.Router();
/* GET Gels */
router.get('/', Gel_controller.Gel_view_all_Page );
module.exports = router;
/* GET detail Gel page */
router.get('/detail', Gel_controller.Gel_view_one_Page);

/* GET create Gel page */
router.get('/create', Gel_controller.Gel_create_Page);

/* GET create update page */

router.get('/update', Gel_controller.Gel_update_Page);

/* GET delete Gel page */
router.get('/delete', Gel_controller.Gel_delete_Page)