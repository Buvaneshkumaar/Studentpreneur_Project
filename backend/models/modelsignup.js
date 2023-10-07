const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const bcrypt=require('bcrypt');

const stdsignup= new Schema(
    {
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    pan_num:{type:String,required:true,unique:true},
    ph_num:{type:Number,required:true,unique:true},
    address:{type:String,required:true},
    clg_id:{type:String,required:true,unique:true},
    clg_token:{type:Number,require:true},
    clg_name:{type:String,required:true},
    clg_state:{type:String,required:true},
    clg_city:{type:String,required:true},
    reg_num:{type:Number,required:true,unique:true},
    acc_num:{type:Number,required:true,unique:true},
    bank_name:{type:String,required:true,unique:true},
    ifsc_code:{type:String,required:true,unique:true},
    github_id:{type:String,required:true,unique:true},
    pass:{type:String,required:true,unique:true},
    verified:{type:String,default:false},

},{collection:'Signup'}
)

stdsignup.pre('save',function(next){
  if(this.pass && this.isModified('pass')){
    bcrypt.hash(this.pass,10,(err,hashed)=>{
      if(err)return next(err);
      this.pass=hashed;
      next();
    });
  }else{
    next();
  }
});

stdsignup.methods.checkpass=function(pass,cb){
  bcrypt.compare(pass,this.pass,(err,result)=>{
    return cb(err,result);
  });
};


const Signupdata=mongoose.model("Signup",stdsignup);

module.exports=Signupdata;

