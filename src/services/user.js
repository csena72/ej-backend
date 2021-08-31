const  userModel = require('../dao/models/user');

module.exports = class {

    async createUser(user){
        await userModel.create(user);
    }

    async getUser(user){
        return userModel.findById(user);
    }

    async getAllUsers(){
        return await userModel.find();
    }

    async updateUser(id, userUpdate){
        const userToUpdate = await userModel.findByIdAndUpdate(id, userUpdate, {
            new: true,
        });
        return userToUpdate;
    }

    async deleteUser(id){
        await userModel.findByIdAndDelete(id);
    }
}