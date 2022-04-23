const { response } = require('express');

const getUsers = (req, res = response) => {
  const { page = 1, limit } = req.query;
  res.json({
    ok: true,
    status: 200,
    msg: 'get all users controller',
    page,
    limit,
  });
};

const createUser = (req, res = response) => {
  res.json({
    ok: true,
    status: 201,
    msg: 'Usuario creado correctamente',
    body: req.body,
  });
};

const updateUSer = (req, res = response) => {
  const { id } = req.params;
  res.json({
    ok: true,
    status: 200,
    mgs: 'Usuario actualizado correctamente',
    id,
  });
};

const deleteUser = (_req, res) => {
  res.json({
    ok: true,
    status: 2,
    msg: 'Usuario eliminado correctamente',
  });
};

module.exports = {
  getUsers,
  createUser,
  updateUSer,
  deleteUser,
};
