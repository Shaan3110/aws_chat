const mongoose= require('mongoose')
const { Schema } = mongoose;

const accountmodel = new Schema({
    aws_id:{
        type:Array,
        "uid":{
            type:String
        },
        "aws":{
            type:String
        }
    },
    uuid:{
        type:String,
    }
});

module.exports=mongoose.model('chat',accountmodel);