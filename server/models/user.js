var mongoose=require('mongoose');

var user=mongoose.model('user',{
   text:{
       type:String,
       required: true,
       minlength: 1,
       trim: true
   }
    
});

//creating instance
/*var users= new user({
   text: 'nish@example.com' 
});

users.save().then((doc)=>{
        console.log('Saved user',doc)
},(e)=>{
   console.log('Unable to save user',e) ;
});
*/
module.exports={user};