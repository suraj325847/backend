const { Schema } = require("mongoose");
const mongooseAggregatePaginate = require('mongoose-aggregate-paginate');

const videoSchema = new Mongoose.Schema ({
    videoFile:{
        requered: true,
        type : String
    },
    thumbnail:{
        requered: true,
        type : String
    },
    discription:{
        requered: true,
        type : String
    },
    duration :{
        requered: true,
        type : Number
    },
    views:{
        default: 0,
        type : Number
    },
    isPublished:{
        default: true,
        type : Boolean
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true 
   })

   videoSchema.plugin(mongooseAggregatePaginate);

const Video = mongoose.model('Video', videoSchema)

module.exports = Video;