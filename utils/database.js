import mongoose from "mongoose";


let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already Connected')
        return
    } else {
        try {
            await mongoose.connect(process.env.MONGODB_URI,{
                dbName : "share-prompt",
             
            })
    
            isConnected = true
            console.log('MongoDB Connected')
    
        } catch (error) {
            console.log(error)
        }
    }
}

