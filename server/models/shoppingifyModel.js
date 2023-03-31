import mongoose, { Schema } from "mongoose";

const shoppingifySchema = new mongoose.Schema({


    category:{
        type:String,
        require:true
    },
    propierties:[
        {
            name: String,
            price: Number,
            quantity: Number,
            note: String,
            image: String
        }
    ]

})

export default mongoose.model("Shoppingify", shoppingifySchema);