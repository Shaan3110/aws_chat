//all module imports
const Chat = require('./model/Chat');


const sendMessage = async(aws_id, body) => {
    let user = await Chat.findOne({
        uuid: body?.recipient
      });


    if (typeof user?.aws_id===String)
      {
        
      }
    else
      {
        user?.aws_id?.map(ele => {
            console.log(ele?.uid);
        })
      }
}

module.exports=sendMessage;