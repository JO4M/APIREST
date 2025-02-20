//Définition d'un schéma pour les utilisateurs
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  // Création du schéma
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
// Exporter le modèle
module.exports = User = mongoose.model('user', UserSchema); 
//

