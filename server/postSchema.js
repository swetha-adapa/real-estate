const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    PropertyType:{
        type:String,
        default:"House"
    },
    Negotiable:{
        type:String,
        default:"Yes"
    },
    Price:String,
    Ownership:{
        type:String,
        default:"sold"  
    },
    PropertyAge:{
        type:String,
        default:"New"  
    },
    PropertyApproved:String,
    PropertyDiscription:String,
    BankLoan:{
        type:String,
        default:"Yes" 
    },
    length1:String,
    Breath:String,
    Area:Number,
    AreaUnit:String,
    bhk:String,
    floor:Number,
    Furnished:String,
    car:String,
    Lift:String,
    Electricity:String,
    Facing:String,
    name:String,
    mobile:Number,
    poster:String,
    sale:String,
    fp:String,
    Pp:String,
    Email:String,
      city:String,
      area:String,
      pincode:Number,
      Address:String,
      landmark:String,
      lalitude:String,
      longitude:String,
      bhk:String
})

const  postModal = mongoose.model("post",postSchema)

module.exports = postModal;