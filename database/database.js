const mongoose=require('mongoose');


//database address
const dbaddress='mongodb://localhost:27017';

//connection
const connectaccount = () =>{
    mongoose.connect(dbaddress).then(()=>{
        console.log("connection successful");
    }).catch((err)=>{
        console.log(err);
    })
}


module.exports=connectaccount;