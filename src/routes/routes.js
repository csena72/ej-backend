const userController = require('../controllers/student');

module.exports = (router) => {

    router
    .post('/api/v1/user/create', userController.createUser)
    .get('/api/v1/users', userController.findAllUser)
    .get('/api/v1/user/:userId', userController.getOneUser)
    .patch('/api/v1/user', userController.updateUser)
    .delete('/api/v1/user/:userId', userController.deleteUser)
    
    return router;
}