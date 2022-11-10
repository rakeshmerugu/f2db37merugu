var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controller/api');
var Gel_controller = require('../controller/Gel');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Gel ROUTES ///
// POST request for creating a Gel
router.post('/Gel', Gel_controller.Gel_create_post);
// DELETE request to delete Gel
router.delete('/Gel/:id', Gel_controller.Gel_delete);
// PUT request to update Gel
router.put('/Gel/:id', Gel_controller.Gel_update_put);
// GET request for one Gel
router.get('/Gel/:id', Gel_controller.Gel_detail);
// GET request for list of all Gel items.
router.get('/Gel', Gel_controller.Gel_list);
module.exports = router;