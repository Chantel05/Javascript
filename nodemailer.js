//"use strict";
 
const nodemailer = require("nodemailer");
 
const transporter = nodemailer.createTransport({
service: "hotmail",
  //port: 465,
  //secure: true,
  auth: {
    //TODO: replace 'user' and 'pass' values from <https://forwardemail.net>
    user: "zwivhuyachantel@outlook.com",
    pass: "Zwi15vhu%",
  }
});
 


  
    // Send mail with the defined transport object
    const options = await transporter.sendMail({
      from: "zwivhuyachantel@outlook.com",  //sender address
      to: " 577907@student.belgiumcampus.ac.za, zwivhuyachantel@outlook.com",  //list of receivers
      subject: "Email Automation using node.js",  //subject line
      text: "Hello?",   //plain text body
      html: "<b>Hello world?</b>",   //html body
    });
 

transporter.sendMail(options, function
    (err, info){
        if(err){
            console.log(err);
            return;
        }
        console.log("Sent" + info.response)

    });









/*
console.log("Message sent: %s", info.messageId);
 
// You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview.
console.log("NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview.");
 
    // You can use the "preview-email" package to preview emails locally in browsers and a local simulator.
console.log("Or you can use the 'preview-email' package to preview emails locally in browsers and a local simulator.");
console.log("Preview-email package: https://github.com/forwardemail/preview-email");
 
 
    console.error(error);
  
 
// Call the main function to send the email.
main();
*/

