const User = require('../models/userModel');

class UserDao {
    async createUser(userData) {
        const user = new User(userData);
        return user.save();
    }

    async getUserById(userId) {
        return User.findById(userId).where({ isDeleted: false });
    }

    async getAllUsers() {
        return User.find({ isDeleted: false });
    }

    async updateUser(userId, userData) {
        return User.findByIdAndUpdate(userId, userData, { new: true }).where({ isDeleted: false });
    }

    async softDeleteUser(userId) {
        return User.findByIdAndUpdate(userId, { isDeleted: true }, { new: true });
    }
}

module.exports = new UserDao();
