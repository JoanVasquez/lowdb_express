const { v4 } = require("uuid");
const { getConnection } = require("../../database");

module.exports = (req, res) => {
  const newTask = {
    id: v4(),
    name: req.body.name,
    description: req.body.description,
  };
  getConnection().get("tasks").push(newTask).write();
  res.status(201).send(newTask);
};
