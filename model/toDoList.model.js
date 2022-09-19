module.exports = mongoose => {
    const ToDoList = mongoose.model("toDoList",
        mongoose.Schema({
            title: String,
            description: String
        },
            { timestamps: true }
        )
    );

    return ToDoList;
}