 const { readData, writeData } = require('../utils/dataHandler');

// 1. GET /api/users - List all users
const getUsers = (req, res) => {
  const users = readData('users.json');
  res.status(200).json(users);
};

// 2. POST /api/users - Create a new profile
const createUser = (req, res) => {
  const { name, email, role, skills, bio } = req.body;
  
  // Validation: block request if mandatory fields are missing
  if (!name || !email || !role) {
    return res.status(400).json({ message: 'Name, email, and role are required' });
  }

  const users = readData('users.json');
  const newUser = {
    id: `usr_${Date.now()}`, // Generates a unique ID
    name,
    email,
    role,
    skills: skills || [],
    bio: bio || ''
  };

  users.push(newUser);
  writeData('users.json', users);
  res.status(201).json(newUser);
};

// 3. PUT /api/users/:id - Update an existing profile
const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email, skills, bio } = req.body;
  
  const users = readData('users.json');
  const userIndex = users.findIndex(u => u.id === id);

  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Overwrite existing data with new details or keep old details
  users[userIndex] = {
    ...users[userIndex],
    name: name || users[userIndex].name,
    email: email || users[userIndex].email,
    skills: skills || users[userIndex].skills,
    bio: bio !== undefined ? bio : users[userIndex].bio
  };

  writeData('users.json', users);
  res.status(200).json(users[userIndex]);
};

module.exports = { getUsers, createUser, updateUser };
