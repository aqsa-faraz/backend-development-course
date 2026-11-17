const Task = require('../models/taskModel');

const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat');
const fields = ["title", "description", "assignedTo", "priority", "status", "dueDate"];

dayjs.extend(customParseFormat);

function parseId(req, res) {
    const id = Number(req.params.id);
    if (!Number.isSafeInteger(id) || id <= 0) {
        res.status(400).json({ success: false, message: "Invalid task ID" });
        return null;
    }
    return id;
}

function isValidDate(dateString){
    const format = 'YYYY-MM-DD';
    return dayjs(dateString, format, true).isValid();
}

function validateTask(data, partial = false) {

    const validPriorities = ["low", "medium", "high"];
    const validStatus = ["pending", "in-progress", "completed"];

    if (!data || typeof data !== "object" || Array.isArray(data))
        return "JSON object required";
    const keys = Object.keys(data);
    if (keys.some(key => !fields.includes(key)))
        return "Unknown task field";
    if (partial && keys.length === 0)
        return "Atleast one is required";
    if (!partial && fields.some(key => !Object.hasOwn(data, key)))
        return "All book fields are required";
    for (const name of ["title", "description", "assignedTo", "priority", "status", "dueDate"]) {
        if (Object.hasOwn(data, name) && (typeof data[name] !== "string" || !data[name].trim()))
            return `${name} must be a non-empty string`;
    }
    // priority Low / Medium / High
    
    if(Object.hasOwn(data, "priority") && !validPriorities.includes(data.priority.trim().toLowerCase()))
        return "Invalid priority value";
    // status Pending / In Progress / Completed
    if(Object.hasOwn(data, "status") && !validStatus.includes(data.status.trim().toLowerCase()))
        return "Invalid status value";
    //due date Deadline in YYYY-MM-DD format
    if(Object.hasOwn(data, "dueDate") && !isValidDate(data.dueDate))
        return "Invalid date format";
    return null;
}

function getTasks(req, res){
    res.json({success: true, data: Task.getAllTasks()});
}

function getTaskById(req, res){
    const id = parseId(req, res);
    if(id === null)
        return;
    const task = Task.findTaskById(id);
    if(!task)
        return res.status(400).json({success: false, message: "Task not found"});
    res.json({success: true, data: task});
}

// status
function searchTasksByStatus(req, res){
    //const status = req.query.status;
    const status = req.params.status;
    const validStatus = ["pending", "in-progress", "completed"];
    if(typeof status !== "string" || !status.trim())
        return res.status(400).json({success: false, message: "Query parameter 'status' is required"});

    if(!validStatus.includes(status.trim().toLowerCase()))
        return res.status(400).json({success: false, message: "Invalid status. Allowed values are pending, in-progress, completed"});
    res.json({success: true, data: Task.searchByStatus(status.trim())});
}

// priority
function searchTasksByPriority(req, res){
    const priority = req.params.priority;
    const validPriorities = ["low", "medium", "high"];
    if(typeof priority !== "string" || !priority.trim())
        return res.status(400).json({success: false, message: "Query parameter 'priority' is required"});

    if(!validPriorities.includes(priority.trim().toLowerCase()))
        return res.status(400).json({success: false, message: "Invalid priority. Allowed values are low, medium, high"});
    res.json({success: true, data: Task.searchByPriority(priority.trim())});
}

// create task
function createTask(req, res){
    const error = validateTask(req.body);
    if(error)
        return res.status(400).json({success: false, message: error});
    const task = Task.create(req.body);
    res.status(201).json({success: true, message: "Task created successfully", data: task});
}

// replace task
function replaceTask(req, res){
    const id = parseId(req, res);
    if(id === null)
        return;
    const error = validateTask(req.body);
    if(error)
        return res.status(400).json({success: false, message: error});
    const task = Task.replace(id, req.body);
    if(!task)
        return res.status(400).json({success: false, message: "Task not found"});
    res.json({success: true, message: "Task replaced successfully", data: task});
}

// patch task
function patchTask(req, res){
    const id = parseId(req, res);
    if(id === null)
        return;
    const error = validateTask(req.body, true);
    if(error)
        return res.status(400).json({success: false, message: error});
    const task = Task.update(id, req.body);
    if(!task)
        return res.status(400).json({success: false, message: "Task not found"});
    res.json({success: true, message: "Task updated successfully", data: task});
}

function deleteTask(req, res){
    const id = parseId(req, res);
    if(id === null)
        return;
    if(!Task.remove(id))
        return res.status(400).json({success: false, message: "Task not found"});
    res.json({success: true, message: "Task deleted successfully"});
}

// Summary
function taskSummary(req, res){
    res.json({success: true, data: Task.summary()});
}

// EmployeeTasks
function employeeTask(req, res){
    const employee = req.params.name;
    if(!employee || typeof employee !== "string")
        return res.status(400).json({success: false, message: "Query parameter 'name' is required"});
    const emp_task = Task.employeeTasks(employee);
    if(!emp_task || emp_task.length <= 0)
        return res.status(400).json({success: false, message: "Employee not found"});
    res.json({success: true, data: emp_task});
}

module.exports = {
    getTasks, getTaskById, searchTasksByStatus, searchTasksByPriority, createTask, replaceTask, patchTask, deleteTask, taskSummary, employeeTask
};