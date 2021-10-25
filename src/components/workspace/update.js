const { getConnection } = require("../../database");

module.exports = async (req, res) => {
  const id = req.params.id;
  const result = await getConnection()
    .get("tasks")
    .find({ id })
    .assign(req.body)
    .write();
  res.json(result);
};
