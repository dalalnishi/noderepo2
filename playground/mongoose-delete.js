var {mongoose}=require('./../server/db/mongoose');

var {Todo}=require('./../server/models/todo');

var {user}=require('./../server/models/user');

var {ObjectID}=require('mongodb');

/*Todo.remove({}).then((result)=>{
    console.log(result);
})*/


Todo.findByIdAndRemove('5c14cf6499a394c179f5ef70').then((todo)=>{
    console.log(todo);
})