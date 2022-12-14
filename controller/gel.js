var Gel = require('../models/Gel');
// List of all gel
exports.Gel_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Gel list');
};
// for a specific gel
exports.Gel_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await Gel.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle egl create on POST.
exports.Gel_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Gel();
    document.Gel_Name = req.body.Gel_Name;
    document.Gel_Company = req.body.Gel_Company;
    document.Gel_Size = req.body.Gel_Size;
    document.Gel_Rating = req.body.Gel_Rating;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};
// Handle Gel delete form on DELETE.
exports.Gel_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Gel delete DELETE ' + req.params.id);
};
// Handle Gel update form on PUT.
exports.Gel_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Gel update PUT' + req.params.id);
};
exports.Gel_list = async function(req, res) {
    try{
        theGels = await Gel.find();
        res.send(theGels);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};
// Handle Gel update form on PUT.
exports.Gel_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Gel.findById( req.params.id)
        // Do updates of properties
        if(req.body.Gel_Name)
               toUpdate.Gel_Name = req.body.Gel_Name;
        if(req.body.Company) toUpdate.Company = req.body.Company;       
        if(req.body.Size) toUpdate.Size = req.body.Size;
        if(req.body.Rating) toUpdate.Rating = req.body.Rating;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};
// VIEWS
// Handle a Gel all view
exports.Gel_view_all_Page = async function(req, res) {
    try{
        theGels = await Gel.find();
        res.render('Gel', { title: 'Gel Search Results', results: theGels });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};

// Handle Gel delete on DELETE.

exports.Gel_delete = async function(req, res) {

    console.log("delete " + req.params.id)
    try {
    result = await Gel.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };


   // Handle a show one view with id specified by query
exports.Gel_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Gel.findById( req.query.id)
    res.render('GelDetails',    // update
   { title: 'Gel Detail', toShow: result }); //Update
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

    // Handle building the view for creating a Gel.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Gel_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Gelcreate', { title: 'Gel Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // query provides the id

exports.Gel_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Gel.findById(req.query.id)
    res.render('Gelupdate', { title: 'Gel Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.Gel_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Gel.findById(req.query.id)
    res.render('Geldelete', { title: 'Gel Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   }