/*const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err)
    {
        return console.log('Unable to connect Database');
    }
    console.log('Database Connected');

    db.collection('Todos').insertOne({
        text: 'Test Record',
        completed: false
    },(err,result)=>{
        if(err)
        {
            return console.log('Unable to insert record',err);
        }
         console.log(JSON.stringify(result.ops,undefined,2));
    });

    db.close();
});*/


const MongoClient = require('mongodb').MongoClient;

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
});