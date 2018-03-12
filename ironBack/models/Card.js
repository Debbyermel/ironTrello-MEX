const Schema = require("mongoose").Schema;

const cardSchema = new require("mongoose").Schema({
    title:{
        type:String,
        required:true
    },
    list:{
        type:Schema.Types.ObjectId,
        ref:"List",
        required:true
    }
},
{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});

module.exports = require("mongoose").model("Card", cardSchema);