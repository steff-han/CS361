
import mongoose from "mongoose";
import 'dotenv/config';

const USERS_DB_NAME = 'UsersDB';
const USERS_CLASS = 'users';

let connection = undefined;

/**
 * Connect to the MongoDB server and to the users database in that server 
 */
async function connect(){
    try{
        connection = await mongoose.connect(process.env.MONGODB_CONNECT_USERS, 
                {dbName: USERS_DB_NAME});
        console.log("Successfully connected to MongoDB using Mongoose!");
    } catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    }
}

/**
 * Define the User schema 
 */
const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true}
});

export { connect };
