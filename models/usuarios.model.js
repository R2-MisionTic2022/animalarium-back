const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    username:{type: String, required: true, max:100},
    email:{type: String, required: true, max:100},
    password:{type: String, required: true, max:128},
    name:{type: String, required: true, max:128},
    lastname:{type: String, required: true, max:128},
    loggin:{type: Number, required: true, max:40},
});

module.exports = mongoose.model("usuarios", UsuarioSchema); 
