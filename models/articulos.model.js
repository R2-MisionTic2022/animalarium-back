const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticulosSchema = new Schema({
    referencia:{type: String, required: true, max:40},
    title:{type: String, required: true, max:250},
    description:{type: String, required: true, max:250},
    url:{type: String, required: true, max:250},
    stock:{type: Number, required: true, max:1000000},
    price:{type: Number, required: true, max:1000000},
    categoria:{type: String, required: true, max:100},
    typePet:{type: String, required: true, max:100},
    status:{type: Number, required: true, max:10}
});

module.exports = mongoose.model("articulos", ArticulosSchema);

