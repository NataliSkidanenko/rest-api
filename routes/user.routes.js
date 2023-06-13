const {Router} = require('express');
const userController = require('../controllers/user.controller');

const userRouter = new Router();

userRouter.post('/user', userController.createUser);
userRouter.get('/users', userController.getUsers);
userRouter.get('/user/:id', userController.getOneUser);
userRouter.put('/user', userController.updateUser);
userRouter.delete('/user/:id', userController.deleteUser);

module.exports = userRouter;
