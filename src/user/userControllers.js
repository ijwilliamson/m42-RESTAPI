const User = require("./userModels");

exports.createUser = async (request, response) => {
    try {
        const newUser = await User.create(request.body);
        console.log("SUCCESFUL", newUser);
        response.status(201).send({ user: newUser.username });
    } catch (error) {
        console.log(error);
        response.status(500).send({error: error.message});
    }
};
