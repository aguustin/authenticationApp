import mongoose, { Schema } from "mongoose";

const shoppingifySchema = new mongoose.Schema({

    monthDate:{
        type:Date
    },
    listName:{
        type:String
    },
    dayDate:{
        type:Date
    },
    category:{
        type:String,
        require:true
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