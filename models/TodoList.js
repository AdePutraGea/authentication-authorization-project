import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const TodoListModel = new Schema({
    todoName : {
        type : String
    },
    type : {
        type : String
    },
    status : {
        type : String
    },
    createdAt : {
        type : Date
    },
    updatedAt : {
        type : Date
    },
    userId : {
        type : String
    }
});

export default mongoose.model("TodoList", TodoListModel);