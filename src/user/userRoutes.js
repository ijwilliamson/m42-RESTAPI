const { Router } = require ("express");
const { createUser, listUsers } = require("./userControllers");

const userRouter = Router();

//userRouter.get('/listUser', listUsers);
//userRouter.patch('/updateUser', updateUser);
//userRouter.delete('/deleteUser', deleteUser);
userRouter.post('/addUser', createUser);

module.exports = userRouter;