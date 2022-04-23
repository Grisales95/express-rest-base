const { Router } = require('express');
const {
  getUsers,
  createUser,
  updateUSer,
  deleteUser,
} = require('../controllers/users.controller');

const router = Router();

router.get('/', getUsers);

router.post('/', createUser);

router.put('/:id', updateUSer);

router.delete('/', deleteUser);

module.exports = router;
