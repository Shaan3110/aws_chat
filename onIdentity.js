//all module imports
const Chat = require('./model/Chat');


const onIdentity = async(aws_id, body) => {
    let flag=0;

    //check if the user exists
    let user=Chat.findOne({
        uuid:body.id
    },(res,err)=>{
        if(!res)
        {
            flag=1;
        }
    });

    //check if the groups exists and if not then create one
    body?.group?.map(ele => {

        Chat.findOne({
            uuid:body.id
        },(res,err)=>{
            if(!res)
            {
                Chat.create({
                    uuid:ele.id,
                    aws_id:[{
                        uid:null,
                        aws_id:null
                    }]
                  })
            }
        });
    })

    //check if the key exists in the aws_id then update the value
    // if not present then add the key and value
    if(user?.aws_id?.[body.id]!==undefined)
    {
        user?.aws_id?.[body.id]=aws_id;
    }
    else
    {
        let updatedchat={
            ...user,
            aws_id:{
            ...user.aws_id,
            [body.id]:[aws_id]}
        }
        let chat= await Chat.findByIdAndUpdate(body.id,{$set:updatedchat},{new:false});
    }
}

module.exports=onIdentity;