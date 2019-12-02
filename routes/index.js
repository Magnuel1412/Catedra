var express = require('express');
//solo pra vizulizar fragmentos
var visucontrol= require('../controladores/vi_frag');
var visu= new visucontrol();
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('index', {title: 'Registro de estudiantes',
        fragmentos: 'Principal/paginai'});

});
//inico de sesio y registro
router.get('/registro', visu.verRegistro);
router.get('/verIncio', visu.verIncio);



module.exports = router;
