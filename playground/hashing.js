const {SHA256} = require('crypto-js');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcryptjs');

var password = 'password';

/*bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,(err,hash)=>{
        console.log(hash);
    });
});*/


var hashedPassword = '$2a$10$sVOJKWIBa2N7OLiXbnEGze7hxtaYvw3CxcAAwyNNss.7TibkWXF4y';

bcrypt.compare('password',hashedPassword,(err,res)=>{
   console.log(res);
});
/*var data = {
    id:5
}*/

/*var token = jwt.sign(data,'password');

console.log(token);

var decoded = jwt.verify(token,'password');

console.log('decode',decoded);*/

/*var message = 'test message';
var hash = SHA256(message).toString();

console.log(`Message:${message}`);
console.log(`Hash:${hash}`);

var data = {
    id:4
};

var token = {
    data,
    hash:SHA256(JSON.stringify(data)+'welcome').toString()
}

//token.data.id=5;
//token.hash=SHA256(JSON.stringify(token.data)).toString();

var result = SHA256(JSON.stringify(token.data)+'welcome').toString();

if(result===token.hash)
{
    console.log('Data not change');
}
else
{
    console.log('Data changed');
}*/

