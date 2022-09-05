module.exports = app => {
    const toDoLists = require("../controller/toDoList.controller");
    var router = require("express").Router();

    // Create a todo list 
    router.post("/", toDoLists.create);
    // Retrieve all todo list collection
    router.get("/", toDoLists.findAll);
    // Retrieve todo list by id
    router.get("/:id", toDoLists.findOne);
    // Update a todo list by id
    router.put("/:id", toDoLists.update);
    // Delete a todo list by id
    router.delete("/:id", toDoLists.delete);

    app.use('/api/todolist/', router);
}