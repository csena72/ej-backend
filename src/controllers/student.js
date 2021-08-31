const UserService = require('../services/user');
const user = new UserService();


exports.createUser = async (req, res,next) => {
    await user.createUser(req.body);
    res.json('User created!');    
} 

exports.findAllUser = async (req, res,next) => {
    const allUsers = await user.getAllUsers();
    res.json(allUsers);
}

exports.updateUser = async (req, res,next) => {
    const {
        body,
        params: { userId }
    } = req;
    const updateUser = await user.updateUser(userId, body);
    res.json(updateUser);
}

exports.getOneUser = async (req, res,next) => {
    const {
        body,
        params: { userId }
    } = req;
    const userRetriever = await user.getUser(userId);
    res.json(userRetriever);
}

exports.deleteUser = async (req, res,next) => {
    const {
        body,
        params: { userId }
    } = req;
    await user.deleteUser(userId);
    res.json({msg: 'Ok'});
}