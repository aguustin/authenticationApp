import mongoose, { Schema } from "mongoose";

const shoppingifySchema = new mongoose.Schema({

    category:{
        type:String,
        require:true
    },
    listName:{
        type:String
    },
    date:{
        type:Date
    },
    propierties: [
        {
            name: String,
            price: Number,
            quantity: {
                type:Number,
                default: 0
            },
            note: String,
            image: String,
            onList:{
                type: Boolean,
                default:false
            }
        }
    ]

})

export default mongoose.model("Shoppingify", shoppingifySchema);