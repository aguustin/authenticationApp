import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    listName:{
        type: String
    },
    listPropierties: [
        {
            category:{
                type:String,
                require:true
            },
            productName:{
                type:String,
                require:true
            },
            quantity:{
                type: Number,
                require:true
            }
        }
    ],
    date:{
        type:Date
    }
});

export default mongoose.model("List", listSchema);