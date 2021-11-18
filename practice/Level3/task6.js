// Create an object using object literal syntax and use variable
//  name email for creating an object, create properties like: sendTo
//   and sentFrom properties and give values to it,
//  create send method which will log the message like "message sent."

let email = {
    sendTo : "ram@gmail.com",
    sendfrom : "shyam@gmail.com",
    send : function(){
        console.log("message sent.");
    }
}
console.log(email);