const {response, request} = require('express');

const usuarioGet = (req = request, res = response) => {
    const { nombre = "no name", q, apikey} = req.query;
    res.json({
        msg: 'get Api - Controller',
        q,
        nombre,
        apikey
    })
}

const usuarioPost = (req, res = response) => {
    //const body = req.body;
    const { nombre, edad} = req.body;
    res.json({
        msg: 'post Api - Controller',
        nombre, edad
    })
}

const usuarioDelete = (req = request, res = response) => {
    const query = req.query;
    res.json({
        msg: 'delete Api - Controller',
        query
    })
}

const usuarioPut = (req = request, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'put Api - Controller',
        id
    })
}

const usuarioPatch = (req, res = response) => {

    res.json({
        msg: 'patch Api - Controller'
    })
}

module.exports = {
    usuarioGet,
    usuarioPost,
    usuarioDelete,
    usuarioPut,
    usuarioPatch
}