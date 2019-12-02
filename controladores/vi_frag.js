'use strict';

class vi_frag {
    //si no hay sesion activa redirecciona a registro si es el caso si no va ala principal
    verRegistro(req, res) {
            res.render('index', {title: 'Registro',
                fragmentos: "resini/registro"
             
            });
        
    }
     verIncio(req, res) {
            res.render('index', {title: 'Inicio de sesion',
                fragmentos: "resini/inicio_se"
             
            });
        
    }
}
module.exports = vi_frag;
