const tasks = require('../data/tasks');

function getAllTasks(){
    return tasks;
}

function findTaskById(id){
    return tasks.find(task => task.id === id);
}

function searchByStatus(status){
    return tasks.filter(task => task.status.toLowerCase() === status.toLowerCase());
}

function searchByPriority(priority){
    return tasks.filter(task => task.priority.toLowerCase() === priority.toLowerCase());
}

function create(data){
    const id = tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    const task = {id, ...data};
    tasks.push(task);
    return task;
}

// Update complete task
function replace(id, data){
    const index = tasks.findIndex(task => task.id === id);
    if(index === -1)
        return null;
    tasks[index] = {id, ...data};
    return tasks[index];
}

// Update selected fields
function update(id, changes){
    const task = findTaskById(id);
    if(!task)
        return null;
    Object.assign(task, changes);
    return task;
}

function remove(id){
    const index = tasks.findIndex(task => task.id === id);
    if(index === -1)
        return null;
    tasks.splice(index, 1);
    return true;
}

// Summary
function summary(){
    const pending = tasks.filter(task => task.status.toLowerCase() === "pending");
    const inprogress = tasks.filter(task => task.status.toLowerCase() === "in-progress");
    const completed = tasks.filter(task => task.status.toLowerCase() === "completed");
    return {
        totalNumberOfTasks: tasks.length,
        pendingTasks: pending.length,
        inprogress: inprogress.length,
        completedTask: completed.length
    };
}

// Employee tasks
function employeeTasks(emp_name){
    return tasks.filter(task => task.assignedTo.toLowerCase() === emp_name.toLowerCase());
}

// overdue tasks
function findOverdue(){
    const today = new Date().toISOString().split("T")[0];
    return tasks.filter(task => task.dueDate < today && task.status.toLowerCase() !== "completed");
}


module.exports = {
    getAllTasks, findTaskById, searchByStatus, searchByPriority, create, replace, update, remove, summary, employeeTasks, findOverdue
}