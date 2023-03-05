const {Schema,model} = require('mongoose');

const UserSchema = new Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    min:6,

  }
},{
  timestamps:true
})

module.exports = model("User",UserSchema);

