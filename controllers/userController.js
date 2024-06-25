const userService = require('../services/userService');
const { userValidation, userIdValidation } = require('../validators/userValidator');

class UserController {
    async createUser(req, res) {
        const { error } = userValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        try {
            const user = await userService.createUser(req.body);
            res.status(201).send(user);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    async getUserById(req, res) {
        const { error } = userIdValidation(req.params);
        if (error) return res.status(400).send(error.details[0].message);

        try {
            const user = await userService.getUserById(req.params.userId);
            if (!user) return res.status(404).send('User not found');
            res.status(200).send(user);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();
            res.status(200).send(users);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    async updateUser(req, res) {
        const { error } = userIdValidation(req.params);
        if (error) return res.status(400).send(error.details[0].message);

        const { error: bodyError } = userValidation(req.body);
        if (bodyError) return res.status(400).send(bodyError.details[0].message);

        try {
            const user = await userService.updateUser(req.params.userId, req.body);
            if (!user) return res.status(404).send('User not found');
            res.status(200).send(user);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    async softDeleteUser(req, res) {
        const { error } = userIdValidation(req.params);
        if (error) return res.status(400).send(error.details[0].message);

        try {
            const user = await userService.softDeleteUser(req.params.userId);
            if (!user) return res.status(404).send('User not found');
            res.status(200).send('User deleted');
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = new UserController();
