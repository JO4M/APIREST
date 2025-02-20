const user = require('../Models/User');

//récupérer tous les utilisateurs : GET
exports.findAll = (req, res) => {  
    user.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la récupération des utilisateurs."
            });
        });
};

//Créer un nouvel utilisateur : POST
exports.create = async (req, res) => {
    const { name, email, password } = req.body;
    //Validation de la requête
    if(!req.body) {
        return res.status(400).send({
            message: "Les champs ne peuvent pas être vides"
        });
    }
    try {
        // Créer un utilisateur
        const newUser = new user({
            name: name,
            email: email,
            password: password
        });
        // Sauvegarder l'utilisateur dans la base de données
        await newUser.save();
        res.send(newUser);
    } catch(err)  {
        res.status(500).send({
            message: err.message || "Une erreur s'est produite lors de la création de l'utilisateur."
        });
    };
    
}