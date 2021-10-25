const { getConnection } = require("../../database");

module.exports = (req, res) => {
  const id = req.params.id;
  const task = getConnection().get("tasks").find({ id }).value();
  res.send(task);
};
