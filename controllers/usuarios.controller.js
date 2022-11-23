const Usuario = require("../models/usuarios.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

exports.login = function(req, res, next) {

    let hashedpass = crypto.createHash("sha512").update(req.body.password).digest('hex');

    Usuario.findOne({ usuario: req.body.email, pass: hashedpass }, function(err, usuario) {
        let response = {
            token: null
        }

        if(usuario !== null) {
            response.token = jwt.sign({
                id: usuario._id,
                usuario: usuario.usuario
            }, "__recret__")
        }
        res.json(response);
    })

    
}

let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let usuario = new Usuario({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        lastname: req.body.lastname,
        loggin: req.body.loggin
    })

    usuario.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el usuario"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El usuario se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Usuario.find(function(err, usuarios){
        res.json(usuarios)
    })
}

exports.findOne = function(req,res){
    Usuario.findOne({_id: req.params.id},function(err, usuario){
        res.json(usuario)
    })
}

exports.update = function(req,res){
    let usuario = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
        lastname: req.body.lastname,
        loggin: req.body.loggin
    }

    Usuario.findByIdAndUpdate(req.params.id, {$set: usuario}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el usuario"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El usuario se modifico correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Usuario.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el usuario"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El usuario se ha eliminado correctamente"
        res.json(response)
    })
}


