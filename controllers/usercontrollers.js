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
//Modifier un utilisateur par son id : PUT
exports.update = async (req, res) => {
    const {id} = req.params; //récupérer l'id de l'utilisateur
    const { name, email, password } = req.body; //récupérer les données à modifier
    
    try {
        // Rechercher l'utilisateur par son id
        const userUpdate = await user.findByIdAndUpdate(id, {
            name: name,
            email: email,
            password: password
        }, {new: true});//new: true pour retourner le document modifié
    ;
    if (!userUpdate) {
        return res.status(404).send({
            message: `Utilisateur avec l'id ${id} non trouvé`
        });
    }
    res.send(userUpdate);
    } catch(err) {
        res.status(500).send({
            message: err.message || `Une erreur s'est produite lors de la modification de l'utilisateur avec l'id ${id}`
        });
    }
}
//Supprimer un utilisateur par son id : DELETE
exports.delete = async (req, res) => {
    const {id}= req.params;
    try{
        const deleteUser = 
        await
         user.findByIdAndDelete(id,
            { name, email, password },
            {new: true}
        );   
        if (!deleteUser) {
            return res.status(404).send({
                message: `Utilisateur avec l'id ${id} non trouvé`
            });
        }
        res.send(deleteUser);
    } catch(err) {
        res.status(500).send({
            message: err.message || `Une erreur s'est produite lors de la suppression de l'utilisateur avec l'id ${id}`
        });
    }
}
    