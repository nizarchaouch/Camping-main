var mongoose=require("mongoose")
var Schema=mongoose.Schema

var Admin=new Schema({

    nom:String,
    prenom:String,
    mail:String,
    numero:String,
    role:String,
    password:String,

    token:{
        type:String,
    },
    
    resetToken:{type:String,
    }

})

module.exports=mongoose.model("admin",Admin)


