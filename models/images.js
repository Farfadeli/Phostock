const mongoose = require("mongoose")

const imageSchema = mongoose.Schema({ 
    file_name : {type : String , required : true},
    owner : {type : String , required : true},
    file_size : {type : Number, required : true},
    file_path : {type : String , required : true},
    file_mime : {type : String , required : true},
    file_date : {type : String , required : true}
})

module.exports = mongoose.model('images', imageSchema)