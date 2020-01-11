//router for contact form using node mailer
var nodemailer = require('nodemailer');

//data from the contact form
let Message = function(name, email, phone, website, message) {
    let name = document.getElementById('name');
    let email = document.getElementById('name'); 
    let phone = document.getElementById('phone');
    let website = document.getElementById('website');
    let message = document.getElementById('message');
};