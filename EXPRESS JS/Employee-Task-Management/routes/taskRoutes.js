const express = require('express');
const router = express.Router();
const controller = require('../controllers/taskController');

// Specific Routes (MUST come before /:id)
router.get("/summary", controller.taskSummary);
router.get("/overdue", controller.getOverdueTasks);
router.get("/employee/:name", controller.employeeTask);
router.get("/status/:status", controller.searchTasksByStatus);
router.get("/priority/:priority", controller.searchTasksByPriority);
// CRUD Routes
router.get("/", controller.getTasks);
router.post("/", controller.createTask);
router.get("/:id", controller.getTaskById);
router.put("/:id", controller.replaceTask);
router.patch("/:id", controller.patchTask);
router.delete("/:id", controller.deleteTask);

module.exports = router;