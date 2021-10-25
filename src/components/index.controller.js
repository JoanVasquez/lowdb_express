const { Router } = require("express");
const list = require("./workspace/list");
const create = require("./workspace/create");
const findById = require("./workspace/findById");
const update = require("./workspace/update");
const remove = require("./workspace/delete");

const router = Router();

router.get("/tasks", list);
router.get("/tasks/:id", findById);
router.post("/tasks", create);
router.put("/taks/:id", update);
router.delete("/tasks/id", remove);

module.exports = router;
