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

}

module.exports=onIdentity;