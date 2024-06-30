import mongoose from 'mongoose'

const MONGODB_URI=process.env.MONGODB_URI

//This line initializes a cached object. It attempts to retrieve an existing mongoose connection from the global object. If no such connection exists, it initializes cached with an object that has conn and promise properties set to null
let cached=(global as any).mongoose || {conn: null, promise: null};

export const connectToDatabase=async()=>{
    // if there is an already cached connection then this line simply returns it
    if(cached.conn) return cached.conn;

    //if mongodb is not defined
    if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

    cached.promise= cached.promise || mongoose.connect(MONGODB_URI,{
        dbName:'evently',
        bufferCommands: false
    })

    cached.conn=await cached.promise;

    return cached.conn;
}