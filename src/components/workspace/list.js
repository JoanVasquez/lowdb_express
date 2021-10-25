const { getConnection } = require("../../database");

module.exports = (req, res) => {
  const tasks = getConnection().get("tasks").value();
  res.json(tasks);
};
