var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('index', {title: 'Registro de estudiantes',
        fragmentos: 'Principal/paginai'});

});

module.exports = router;
