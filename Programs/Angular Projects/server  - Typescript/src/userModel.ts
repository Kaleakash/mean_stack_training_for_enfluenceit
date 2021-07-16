import mongoose,{Document} from 'mongoose';
interface User extends Document{
    email:string;
    password:string;
}
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }  
     
});

module.exports = mongoose.model<User>("User", userSchema);
