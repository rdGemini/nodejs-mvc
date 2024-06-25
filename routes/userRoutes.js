const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.get('/', authenticateToken, userController.getAllUsers);
router.get('/:userId', authenticateToken, userController.getUserById);
router.post('/', authenticateToken, userController.createUser);
router.put('/:userId', authenticateToken, userController.updateUser);
router.patch('/:userId', authenticateToken, userController.updateUser);
router.delete('/:userId', authenticateToken, userController.softDeleteUser);

module.exports = router;
