// import { connect } from "http2";
import mongoose,{ Mongoose } from "mongoose";
import { buffer } from "stream/consumers";

const MONGODB_URI = process.env.MONGODB_URI!;

interface MongooseConn{
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cashed: MongooseConn=(global as any).mongoose;

if(!cashed){
    cashed=(global as any).mongoose={
        conn:null,
        promise:null,
    }
}

export const connect =async()=>{

    if(cashed.conn){
        return cashed.conn;
    }
    cashed.promise=cashed.promise || mongoose.connect(MONGODB_URI,{

        dbName:"e-com",
        bufferCommands:false,
        connectTimeoutMS:3000,
    })
    cashed.conn=await cashed.promise;

    return cashed.conn;

}
//praneethkumarpendota21
//GO5c41PWWIfoGWLo