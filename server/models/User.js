import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },

    password:{
        type:String,
        required:true,
    },

    phone:{
        type:String,
        required:true,
    },

    bloodGroup:{
        type:String,
        required:true,
        enum:[
            "A+","A-",
            "B+","B-",
            "AB+","AB-",
            "O+","O-"
        ]
    },

    city:{
        type:String,
        required:true,
    },

    role:{
        type:String,
        enum:["donor","hospital","admin"],
        default:"donor",
    },

    available:{
        type:Boolean,
        default:true,
    }

},
{
    timestamps:true,
}
);

export default mongoose.model("User",userSchema);