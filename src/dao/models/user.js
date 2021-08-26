const { Schema, model } = require('mongoose');

// Estructura del documento en MongoDB a través de Mongoose
const userSchema = new Schema({
    name: String,
    email: String,
    address: String,
    age: Number,    
})

// Obj. de la clase que me da acceso a los métodos para hacer el CRUD.
module.exports = model('User', userSchema);