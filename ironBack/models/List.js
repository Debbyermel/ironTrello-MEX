const Schema = require("mongoose").Schema;

const listSchema = new require("mongoose").Schema({
    title:{
        type:String,
        required:true
    },
    cards:[{
        type:Schema.Types.ObjectId,
        ref:"Card"
    }]
},
{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});

module.exports = require("mongoose").model("List", listSchema);