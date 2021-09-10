const mongoose = require("mongoose"); 
const todoSchema = mongoose.Schema({
    title: { 
        type: String, 
        required: true, 
    }, 
    completed: { 
        type: Boolean, 
        equired: true,
    },
}); 
const todo = (module.exports = mongoose.model("todo", todoSchema));