const Articulo = require("../models/articulos.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let articulo = new Articulo({
        referencia: req.body.referencia,
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        stock: req.body.stock,
        price: req.body.price,
        categoria: req.body.categoria,
        typePet: req.body.typePet,
        status: req.body.status
    })

    articulo.save(function(err){
        if(err){
            console.log = false, 
            response.exito = false,
            response.msg = "Error al guardar el articulo"
            res.json(response)
            return;
        }
    
        response.exito = true,
        response.msg = "El articulo se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Articulo.find(function(err, articulos){
        res.json(articulos)
    })
}

exports.findOne = function(req,res){
    Articulo.findOne({id_articulo: req.params.id_articulo},function(err, articulo){
        res.json(articulo)
    })
}

exports.update = function(req,res){
    let articulo = {
        referencia: req.body.referencia,
        title: req.body.title,
        description: req.body.description,
        url: req.body.url,
        stock: req.body.stock,
        price: req.body.price,
        categoria: req.body.categoria,
        typePet: req.body.typePet,
        status: req.body.status
    }

    Articulo.findByIdAndUpdate(req.params.id, {$set: articulo}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el articulo, intente nuevamente"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El articulo se actualizó correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Articulo.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el articulo, intenta nuevamente"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El articulo ha sido eliminado correctamente"
        res.json(response)
    })
}
