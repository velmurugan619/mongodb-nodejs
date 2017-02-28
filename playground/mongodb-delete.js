/*const { MongoClient,ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err)
	{
		console.log('Unable to connect Database');
	}
	console.log('Database Connected');

	db.collection('Todo').deleteMany({text: 'Test Record'}).then((result)=>{
		console.log(result);
	});
});*/


/*const { MongoClient,ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err)
	{
		console.log('Unable to Connect Database');
	}
	console.log('Database Connected');

	db.collection('Todo').deleteOne({text: 'Test Record'}).then((result)=>{
		console.log(result)
	})
});*/


const { MongoClient,ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err)
	{
		console.log('Unable connect Database');
	}
	console.log('Database Connected');

	db.collection('Todo').findOneAndDelete({_id:new ObjectID("58ae59866c0675255cd4b9a1")}).then((result)=>
	{
		console.log(JSON.stringify(result,undefined,2));
	});
});