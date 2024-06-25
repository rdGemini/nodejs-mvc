const userDao = require('../daos/userDao');

class UserService {
    async createUser(userData) {
        return userDao.createUser(userData);
    }

    async getUserById(userId) {
        return userDao.getUserById(userId);
    }

    async getAllUsers() {
        return userDao.getAllUsers();
    }

    async updateUser(userId, userData) {
        return userDao.updateUser(userId, userData);
    }

    async softDeleteUser(userId) {
        return userDao.softDeleteUser(userId);
    }
}

module.exports = new UserService();
