const mongoose = require('mongoose');
const PostSchema = require('./post_schema');
const Schema = mongoose.Schema;


const UserSchema = new Schema ({
  name: {
    type:String,
    validate:{
      validator:(name) => name.length >2,
      message:'Name must be longer than 2 characters.'
    },
    required:[true, 'Name is Required.']
     },
   postCount:{
     type:Number
   },
   posts:[PostSchema]
});

const User = mongoose.model('user', UserSchema);
module.exports = User;
