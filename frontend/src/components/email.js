import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

function Email( props ){




var templateParams = {
    name: 'James',
    notes: 'Check this out!'
};


sendEmail = () => {
   
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    <body>
    <h1>hello</h1>
    </body>
    </html>`;

   



emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });

}
export default Email;