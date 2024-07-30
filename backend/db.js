const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://thapamohit2058:lXstfoYPp1teUm0f@cluster0.ihdp7vy.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}