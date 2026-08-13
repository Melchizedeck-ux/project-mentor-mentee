const express = require('express');
const router = express.Router();
const { getUsers, createUser, updateUser } = require('../controllers/userController');

// Map endpoints to the controller actions
router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', updateUser);

module.exports = router; 