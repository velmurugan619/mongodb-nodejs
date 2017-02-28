/*const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log('Unable connect Database',err)
    }
    console.log('Database Connected Successfully');

db.collection('Users').insertOne({
    name:'velmurugan',
    age:'24',
    location:'north street',
    completed:false
},(err,result)=>{
    if(err)
    {
        return console.log('Cannot Insert Data',err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
});
db.close();
});*/


/*const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
        if(err)
        {
            return console.log('Unable to connect Database');
        }
        console.log('Database Connected');

       db.collection('Todos').find({
           _id:new ObjectID('58ad877d066df7186c8eec0b')
       }).toArray().then((docs)=>{
           console.log('Todos');
           console.log(JSON.stringify(docs,undefined,2));

       },(err)=>{
            console.log('Unable to fetch result',err);
        });

    });*/

/*const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log('Unable to connect Database');
    }
    console.log('Database Connected');

db.collection('Todos').find().count().then((count)=>{
    console.log(`No of Datas ${count}`);


},(err)=>{
    console.log('Unable to fetch result',err);
});

});*/

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
        if(err)
        {
            console.log('Unable to Connect Database');
        }
        console.log('Database Connected');

        db.collection('Users').find({name:'velmurugan'}).toArray().then((docs)=>{
            console.log('Todos');
            console.log(JSON.stringify(docs,undefined,2));
        },(err)=>{
            console.log('Unable fo fetch result');
});
});

/*const { MongoClient,ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log('Unable to Connect Database');
    }
    console.log('Database Connected');

    db.collection('Todo').deleteMany({text:'Test Record'}).then((result)=>{
        console.log(result);
    });
});*/

