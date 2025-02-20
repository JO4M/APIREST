const express = require("express");
const router = express.Router();
const userController = require('../controllers/usercontrollers');

// Route pour récupérer tous les utilisateurs
router.get('/users', userController.findAll);
// Route pour créer un nouvel utilisateur
router.post('/create-user', userController.create);







module.exports = router;