const mongoose= require('mongoose')
const { Schema } = mongoose;

const accountmodel = new Schema({
    aws_id:{
        type:Object
    },
    uuid:{
        type:String,
        unique:true
    }
});

module.exports=mongoose.model('chat',accountmodel);