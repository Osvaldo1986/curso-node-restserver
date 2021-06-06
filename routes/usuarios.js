const { Router} = require('express');
const { usuarioGet,  usuarioPost,
    usuarioDelete,
    usuarioPut,
    usuarioPatch } = require('../controller/usuarios');
const router = Router();

router.get('/', usuarioGet);

router.post('/', usuarioPost);

router.put('/:id', usuarioPut);

router.delete('/', usuarioDelete);

router.patch('/', usuarioPatch);

module.exports = router;