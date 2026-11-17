const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController');

router.get("/status/:status", controller.searchTasksByStatus);
router.get("/employee/:name", controller.employeeTask);
router.get("/summary", controller.taskSummary);
router.get("/priority/:priority", controller.searchTasksByPriority);
router.get("/", controller.getTasks);
router.get("/:id", controller.getTaskById);
router.post("/", controller.createTask);
router.put("/:id", controller.replaceTask);
router.patch("/:id", controller.patchTask);
router.delete("/:id", controller.deleteTask);

module.exports = router;