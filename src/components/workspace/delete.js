const { getConnection } = require("../../database");

module.exports = (req, res) => {
  const id = req.params.id;
  const result = getConnection().get("tasks").remove({ id }).write();
  res.json(result);
};
