const express = require("express");
const router = express.Router();
const userController = require('../controllers/usercontrollers');

// Route pour récupérer tous les utilisateurs
router.get('/users', userController.findAll);
// Route pour créer un nouvel utilisateur
router.post('/create-user', userController.create);
// Route pour modifier un utilisateur par son id
router.put('/update-user/:id', userController.update);
// Route pour supprimer un utilisateur par son id
router.delete('/delete-user/:id', userController.delete);







module.exports = router;