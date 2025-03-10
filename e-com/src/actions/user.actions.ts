// "use server"

// import User from "@/modals/user.modal"

// import {connect} from "@/db"

// export async function createUser(user:any){

//     try{
//         await connect()
//         const newUser= await User.create(user)
//         return JSON.parse(JSON.stringify(newUser))

//     }catch(err){
//         console.log(err)
//     }
// }

"use server";

import User from "@/modals/user.modal";
import { connect } from "@/db";

interface IUser {
    // Define the structure of the user object here
    name: string;
    email: string;
    // Add other properties as needed
}

export async function createUser(user: IUser) {
    try {
        await connect();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));
    } catch (err) {
        console.log(err);
    }
}
