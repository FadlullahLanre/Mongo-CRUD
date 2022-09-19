const db = require("../model");
const ToDoList = db.toDoLists;

// Add and save a new ToDO List
exports.create = (req, res) => {
    // validate request
    if (!req.body.title) {
        res.status(400).send("To do list content can not be empty!");
        return;
    }
    // create a todo list
    const toDoList = new ToDoList({

        title: req.body.title,
        description: req.body.description
    });
    // save tutorial
    toDoList.save(toDoList)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "error occured while creating the todo list" });
        });
};

// Retrieve all ToDO list collection.
exports.findAll = (req, res) => {
    // find by title in the database
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    ToDoList.find(condition)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "error while retrieving todo collection" });
        });

};

// Retrieve a todo list by Id
exports.findOne = (req, res) => {
    const id = req.params.id;
    ToDoList.findById(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "Not found todo list with id: " + id });
            }
            res.send(data);
        }).catch(err => {
            res.status(500).send({ message: "Error retrieving todo list with id:" + id });
        });
};

// Update a todo list by id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({ message: "data to update can not be empty!" })

    }
    const id = req.params.id;
    ToDoList.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot update Todo list with id=${id}, Maybe Todo list does not exist` });
            }
            else res.send({ message: "Todo list updated successfully!" });

        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating todo list with id " + id
            });
        });
}

// Delete a todo list by id
exports.delete = (req, res) => {
    const id = req.params.id;
    ToDoList.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot delete Todo list with id=${id}. Maybe Todo list was not found!` })
            } else {
                res.send({ message: "Todo list was updated successfully!" })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete todo list with id" + id
            });
        });

};





