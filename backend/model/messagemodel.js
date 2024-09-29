const mongoose=require('mongoose');

const Messagemodel=mongoose.Schema({
    sender:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    chat:{type:mongoose.Schema.Types.ObjectId,ref:'chat'},
    content:{type:String,trim:true}
})

const message=mongoose.Schema("message",Messagemodel);

module.exports=message;