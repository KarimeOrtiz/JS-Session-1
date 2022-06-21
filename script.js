console.log("Hello World!")
//declaration
var userName;

//assign the value
userName="Diana";
let userAge = 99;

console.log(userName);

let userEmail = "diana.ortizbonilla@gmail.com"; //declaration and assign
const url = "www.diana.com.mx"; //constant (it can't change)

console.log(userEmail);

//document.write("<p>User Name: " + userName, " </p> <p>User email: " + userEmail, " </p> <p> User age: " + userAge, " </p> <p> Web page: " + url + "</p>"); // :'(

document.write(`
    <p>Name: ${userName}</p>
    <p>Age: ${userAge}</p>
    <p>Email: ${userEmail}</p>
    <p>URL: ${url}</p>
`); // :)

let jobTitle = "Web Developer";
let geoLocation = "Mexicali BC";
let partnerName = "Agustin Gonzalez";
let numberChildren = 2;

document.write(`
    <p>You will be a ${jobTitle} in ${geoLocation}, 
    and married to ${partnerName} with ${numberChildren} kids.</p>
`); // :)

let pass = "12345";
let age = 22;
let country = "Mexico";
let salary = 12000;

document.write(`
    <p>Name: ${userName}</p>
    <p>Email: ${userEmail}</p>
    <p>Salary: ${salary*12}</p>
`); // :)