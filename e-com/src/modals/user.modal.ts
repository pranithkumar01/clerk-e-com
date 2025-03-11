import { Schema,model } from "mongoose";
// import { unique } from "next/dist/build/utils";

const userSchema = new Schema({
    clerkId:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        
    },
    username:{
        type: String,
        required: true,
    },
    photo:{
        type: String,
        required: true,
    },
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
    }
    
})

const User =model?.User || model("User",userSchema)

export default User
