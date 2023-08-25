import mongoose from "mongoose"; 


export const Connection = async () => {
    const URL = 'mongodb+srv://ritikgaur:ritikgaur@cluster0.bksfhdh.mongodb.net/';
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            dbName:"ecom"
        })
    console.log('Database connected')
    }
    catch(error){
       console.log(`Error in connecting with the database`, error.message)    
    }
}

export default Connection;