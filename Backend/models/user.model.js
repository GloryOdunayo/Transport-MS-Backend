const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const userSchema = mongoose.Schema({
    firstname: {type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    image:{type:String}
})
let saltRound = 10
userSchema.pre("save",function(next){
    bcrypt.hash(this.password,saltRound,(err,hashedPassword)=>{
        if(err){
            console.log(err)
        }else{
            this.password = hashedPassword
            next()
        }
    })
})
userSchema.methods.validatePassword = function(password,callback){
    bcrypt.compare(password,this.password,(err,same)=>{
        if(!err){
            callback(err,same)
        }else{
            next()
        }
    })
}
const userModel = mongoose.model("passenger_collection",userSchema)
module.exports = userModel;